function sortDeps(fileMaps) {
    return Object.keys(fileMaps).reduce((result,itemKey) => {
        const itemDeps = fileMaps[itemKey]

        // 看看结果列表中有没有当前的文件
        // 如果有要将当前文件的依赖插入当前文件前面
        // 如果没有直接依次放入当前文件的依赖、当前文件
        let itemIndex = result.findIndex((item) => item = itemKey)
        if(itemIndex !== -1){
            itemDeps.map(itemDep => {
                // 后来的依赖可能已经存在了，需要去重
                if(!result.includes(itemDep)){
                    result.splice(itemIndex,0,itemDep)
                    itemIndex++
                }
            })

        }else{
            result.push(...itemDeps,itemKey)
        }

        return result

    },[])
}

console.log(sortDeps({ 'index.js': ['1.js', '2.js'], '2.js': ['1.js']}))
console.log(sortDeps({ 'index.js': ['1.js', '2.js'], '2.js': ['1.js'],'1.js':['3.js','4.js']}))
