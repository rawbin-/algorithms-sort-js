import {dataListCommonCheck} from "./common-util.mjs";
export function mergeSort(dataList,start,end){
    const [valid,result] = dataListCommonCheck(dataList)
    if(!valid){
        return result
    }

    if(start === undefined){
        start = 0
    }
    if(end === undefined){
        end = dataList.length - 1
    }

    if(start < end){
        let middleIndex = (start + end) >> 1
        mergeSort(dataList,start,middleIndex)
        mergeSort(dataList,middleIndex + 1,end)

        // 以下是合并的过程
        let tempList = [] // 存放临时已排序的序列
        // 合并左右两部分 第一部分是start到middleIndex, 第二部分是middleIndex + 1 到end
        let leftIndex = start, rightIndex = middleIndex + 1
        // 先合并都有元素可对比的情况
        while (leftIndex <= middleIndex && rightIndex <= end){
            if(dataList[leftIndex] <= dataList[rightIndex]){
                tempList.push(dataList[leftIndex++]) // 先取值再自增
            }else{
                tempList.push(dataList[rightIndex++]) // 先取值再自增
            }
        }

        // 再合并只有左或者只有右存在的元素
        // 合并左序列剩余元素
        while (leftIndex <= middleIndex){
            tempList.push(dataList[leftIndex++])
        }
        // 合并右序列剩余元素
        while (rightIndex <= end){
            tempList.push(dataList[rightIndex++])
        }

        // 再把临时序列已排序的数据写回到dataList中
        for(let i = 0, len = tempList.length; i < len; i++){
            dataList[start + i] = tempList[i]
        }
    }

    return dataList
}
