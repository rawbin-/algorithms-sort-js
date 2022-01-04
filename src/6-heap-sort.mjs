import {dataListCommonCheck} from "./common-util.mjs";

function heapifyNode(dataList,index = 0, rootMax = false){
    let leftIndex = 2 * index + 1,rightIndex = 2 * index + 2
    let maxLength = dataList.length
    let targetIndex = index
    if(rootMax){
        if(leftIndex < maxLength && dataList[targetIndex] < dataList[leftIndex]){
            targetIndex = leftIndex
        }

        if(rightIndex < maxLength && dataList[targetIndex] < dataList[rightIndex]){
            targetIndex = rightIndex
        }
    }else{
        if(leftIndex < maxLength && dataList[targetIndex] > dataList[leftIndex]){
            targetIndex = leftIndex
        }

        if(rightIndex < maxLength && dataList[targetIndex] > dataList[rightIndex]){
            targetIndex = rightIndex
        }
    }

    if(targetIndex !== index){
        [dataList[index],dataList[targetIndex]] = [dataList[targetIndex],dataList[index]]
        heapifyNode(dataList,targetIndex,rootMax)
    }
}

function heapify(dataList,rootMax = false){
    // 先把堆建立起来
    const count = dataList.length
    const maxParentNodeIndex = (count >> 1) - 1 // 对半减一，减的一为索引从零开始
    for(let i = maxParentNodeIndex ; i >= 0; i--){
        heapifyNode(dataList,i,rootMax)
    }

    return dataList
}

/**
 *
 * @param dataList
 * @param rootMax 是否是大根堆/大顶堆
 * @returns {*[]|*}
 */
export function heapSortA(dataList, rootMax = false){
    const [valid,result] = dataListCommonCheck(dataList)
    if(!valid){
        return result
    }

    const count = dataList.length
    const resultList = []

    if(rootMax){
        while (resultList.length !== count){
            heapify(dataList,rootMax)
            resultList.unshift(dataList[0])
            dataList.splice(0,1)
        }
    }else{
        while (resultList.length !== count){
            heapify(dataList,rootMax)
            resultList.push(dataList[0])
            dataList.splice(0,1)
        }
    }

    return resultList
}
