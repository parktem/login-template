import * as jwt from './jwt';

/*const PATH_WITHOUT_JWT: [string, string][] = [
    ['/users/signup', '*'],
    ['/users/signin', '*']
]*/

const PATH_WITHOUT_JWT: string[] = ['/users/signup', '/users/signin', 'ping'];

export function middleware(req, res, next) {
    if (!PATH_WITHOUT_JWT.includes(req.path)) {
        if (req.headers && req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            jwt.verifyJWT(token).then( (res: any) => {
                if (res) {
                    next();
                } else {
                    res.status(401).send();
                }
            }, () => {
                res.status(401).send();
            })
        } else {
            res.status(401).send();
        }
    } else {
        next();
    }
}

function needsJWT(req: any): boolean {
    for (const pathWithoutJWT in PATH_WITHOUT_JWT) {
        return pathWithoutJWT[0] === req.path &&
            (pathWithoutJWT[1] === '*' ||
                pathWithoutJWT[1] === (req.method))
    }
    return false;
}
