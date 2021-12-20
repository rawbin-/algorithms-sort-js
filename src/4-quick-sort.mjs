import {dataListCommonCheck} from "./common-util.mjs";

export function quickSortA(dataList,start,end){
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
        let pivot = dataList[start] // 第一个元素为基准
        let pivotIndex = start // 预期基准的位置
        for(let j = start + 1; j <= end; j++){
            if(pivot > dataList[j]){
                let tmp = ++pivotIndex; // 每次交换的是基准预期位置的元素，有交换的话（会来一个小的），预期位置就是下一个位置
                [dataList[j],dataList[tmp]] = [dataList[tmp],dataList[j]]
            }
        }

        // 将基准预期位置的元素和基准元素交换
        [dataList[start],dataList[pivotIndex]] = [dataList[pivotIndex],dataList[start]]

        quickSortA(dataList,start,pivotIndex -  1)
        quickSortA(dataList,pivotIndex + 1, end)
    }
    return dataList
}

export function quickSortB(dataList,start,end){
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
        let low = start, high = end;
        let pivot = dataList[start]
        while (low < high){
            while (low < high && pivot >= dataList[low]){
                low++
            }
            while (low < high && pivot < dataList[high]){
                high--
            }
            [dataList[low],dataList[high]] = [dataList[high],dataList[low]]
        }
        // 这里low === high了
        [dataList[start],dataList[high-1]] = [dataList[high-1],dataList[start]]

        quickSortB(dataList,start, low - 1)
        quickSortB(dataList,low + 1, end)
    }

    return dataList
}
