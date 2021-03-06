import {dataListCommonCheck} from "./common-util.mjs";

/**
 * 这个是小的往前放的思路
 * @param dataList
 * @returns {null|*}
 */
export function bubbleSortA(dataList){
    const [valid,result] = dataListCommonCheck(dataList)
    if(!valid){
        return result
    }

    const n = dataList.length
    for(let i = 1; i <= n; i++){
        for(let j = n - 1; j >= i; j--){
            if(dataList[j] < dataList[j - 1]){
                [dataList[j],dataList[j - 1]] = [dataList[j - 1],dataList[j]]
            }
        }
    }
    return dataList
}

/**
 * 这个是小的往前放的思路的递归实现
 * @param dataList
 * @param startIndex
 * @returns {null|*}
 */
export function bubbleSortARecursive(dataList,startIndex = 0){
    const [valid,result] = dataListCommonCheck(dataList)
    if(!valid){
        return result
    }
    const n = dataList.length
    if(startIndex === n - 1){
        return
    }
    for(let i = n - 1; i > startIndex; i--){
        if(dataList[i] < dataList[i - 1]){
            [dataList[i],dataList[i - 1]] = [dataList[i - 1],dataList[i]]
        }
    }
    bubbleSortARecursive(dataList,startIndex + 1)
    return dataList
}

/**
 * 这个是大的往后放的思路
 * @param dataList
 * @returns {*}
 */
export function bubbleSortB(dataList){
    const [valid,result] = dataListCommonCheck(dataList)
    if(!valid){
        return result
    }

    const n = dataList.length
    for(let i = 1; i < n; i++){
        for(let j = 0; j < n - i; j++){  // 第 i+1 趟让下标 n-i 的元素有序
            if(dataList[j] > dataList[j + 1]){
                [dataList[j],dataList[j + 1]] = [dataList[j + 1],dataList[j]]
            }
        }
    }
    return dataList
}

/**
 * 这个是大的往后放的思路的递归版本
 * @param dataList
 * @returns {*}
 */
export function bubbleSortBRecursive(dataList, endIndex = dataList && dataList.length){
    const [valid,result] = dataListCommonCheck(dataList)
    if(!valid){
        return result
    }

    if(endIndex === 0){
        return
    }
    for(let i = 0; i < endIndex; i++){
        if(dataList[i] > dataList[i+1]){
            [dataList[i],dataList[i + 1]] = [dataList[i + 1],dataList[i]]
        }
    }
    bubbleSortBRecursive(dataList, endIndex - 1)
    return dataList
}


/**
 * 这个是小的往前放的思路的优化版本
 * @param dataList
 * @returns {null|*}
 */
export function bubbleSortAOpt(dataList){
    const [valid,result] = dataListCommonCheck(dataList)
    if(!valid){
        return result
    }

    const n = dataList.length
    let isOrdered = true
    for(let i = 1; i <= n; i++){
        for(let j = n - 1; j >= i; j--){  // 第 i+1 趟让下标 i 的元素有序
            if(dataList[j] < dataList[j - 1]){
                [dataList[j],dataList[j - 1]] = [dataList[j - 1],dataList[j]]
                isOrdered = false // 第一轮发生过交换，就不是完全有序的
            }
        }
        if(isOrdered){
            break
        }
    }
    return dataList
}
