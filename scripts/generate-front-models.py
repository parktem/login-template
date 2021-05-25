import shutil

baseSource = './src/'

#directoryModels: [0] -> Source || [1] -> Name of destination folder
directoryModels = [
    ['User/Domain/DTO', 'User'],
]

dst = '../portfolio-front/src/app/shared/DTO/'

for i in directoryModels:
    shutil.copytree(baseSource + i[0], dst + i[1])
