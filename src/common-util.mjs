export function isValidDataList(dataList){
    return Array.isArray(dataList)
}

export function dataListCommonCheck(dataList){
    if(!isValidDataList(dataList)){
        return [false,null]
    }

    if(dataList.length < 2){
        return [false,dataList]
    }

    return [true,dataList]
}
