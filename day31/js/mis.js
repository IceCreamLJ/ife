    var regionChoose = document.getElementsByTagName("select")[0];
    var productChoose = document.getElementsByTagName("select")[1];


    var chooseList = [], region = "", product = "";

    regionChoose.onchange = function(e){
        region = e.target.value;
        if(region == "所有"){
            region = "";
        }
        showTable()

    };

    productChoose.onchange = function(e){
        product = e.target.value;
        if(product == "所有"){
            product = "";
        }
        showTable()
    };


    function showTable() {
        chooseList = sourceData.filter(function(item){
            return item.region.indexOf(region) !=-1  && item.product.indexOf(product)!=-1;
        });
        addTable(chooseList);
    }

    function addTable(chooseList, firstDisplay, rowSpan){
        var table = document.getElementsByTagName("table")[0];
        var list = [];
        if(firstDisplay){
            list.push("<tr><th class='product'>地区</th><th>商品</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th>" +
                "<th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></tr>");
            // chooseList.map((item,index)=>(
            //     list.push("<tr><td>" + item.region + "</td><td>" + item.product + "</td><td>" + item.sale[0]
            //         + "</td><td>" + item.sale[1]  + "</td><td>" + item.sale[2] + "</td><td>" + item.sale[3]
            //         + "</td><td>" + item.sale[4] + "</td><td>" + item.sale[5]  + "</td><td>" + item.sale[6]
            //         + "</td><td>" + item.sale[7] + "</td><td>" + item.sale[8]  + "</td><td>" + item.sale[9]
            //         + "</td><td>" + item.sale[10] + "</td><td>" + item.sale[11] +  "</td></tr>")
            // ));
            for(var i = 0; i < chooseList.length; i++){
                var item = chooseList[i];
                if(i > 0){
                    var firstItem = chooseList[i-1];
                }
                list.push("<tr>"+( i == 0 ?("<td rowspan='"+ rowSpan +"'>" + item.region + "</td>"):((item.region.indexOf(firstItem.region)!=-1)?"":("<td rowspan='"+ rowSpan +"'>" + item.region + "</td>")))+"<td>" + item.product + "</td><td>" + item.sale[0]
                    + "</td><td>" + item.sale[1]  + "</td><td>" + item.sale[2] + "</td><td>" + item.sale[3]
                    + "</td><td>" + item.sale[4] + "</td><td>" + item.sale[5]  + "</td><td>" + item.sale[6]
                    + "</td><td>" + item.sale[7] + "</td><td>" + item.sale[8]  + "</td><td>" + item.sale[9]
                    + "</td><td>" + item.sale[10] + "</td><td>" + item.sale[11] +  "</td></tr>")
            }
        } else{
            list.push("<tr><th class='product'>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th>" +
                "<th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></tr>");
            // chooseList.map((item,index)=>(
            //     list.push("<tr><td>" + item.product + "</td><td>" + item.region + "</td><td>" + item.sale[0]
            //         + "</td><td>" + item.sale[1]  + "</td><td>" + item.sale[2] + "</td><td>" + item.sale[3]
            //         + "</td><td>" + item.sale[4] + "</td><td>" + item.sale[5]  + "</td><td>" + item.sale[6]
            //         + "</td><td>" + item.sale[7] + "</td><td>" + item.sale[8]  + "</td><td>" + item.sale[9]
            //         + "</td><td>" + item.sale[10] + "</td><td>" + item.sale[11] +  "</td></tr>")
            // ));
            for(var i = 0; i < chooseList.length; i++){
                var item = chooseList[i];
                if(i > 0){
                    var firstItem = chooseList[i-1];
                }
                list.push("<tr>"+( i == 0 ?("<td rowspan='"+ rowSpan +"'>" + item.product + "</td>"):((item.product.indexOf(firstItem.product)!=-1)?"":("<td rowspan='"+ rowSpan +"'>" + item.product + "</td>")))+"<td>" + item.region + "</td><td>" + item.sale[0]
                    + "</td><td>" + item.sale[1]  + "</td><td>" + item.sale[2] + "</td><td>" + item.sale[3]
                    + "</td><td>" + item.sale[4] + "</td><td>" + item.sale[5]  + "</td><td>" + item.sale[6]
                    + "</td><td>" + item.sale[7] + "</td><td>" + item.sale[8]  + "</td><td>" + item.sale[9]
                    + "</td><td>" + item.sale[10] + "</td><td>" + item.sale[11] +  "</td></tr>")
            }
        }

        table.innerHTML = list.join("");
    }


    var regionData = [{ value: 1, content: "华东"},{ value: 2, content: "华南"}, { value: 3, content: "华北"}];
    var productData = [{ value: 1, content: "手机"},{ value: 2, content: "笔记本"}, { value: 3, content: "智能音箱"}];
    function createCheckBox(id, arr){
        var idNode = document.getElementById(id);
        var list = [];
        list.push("<input type='checkbox' name=" + id + " checkboxType='all' >全选");
        for(var i in arr){
            list.push("<input type='checkbox' name=" + id + " checkboxType='self'>"+ arr[i].content);
        }
        idNode.innerHTML = list.join("");

        idNode.onchange = function(e){
            var inputNode = document.getElementsByName(id);
            var pointerAll = idNode.childNodes[0];
            var node = e.target;
            var type = node.getAttribute("checkboxType");
            var check = node.checked;
            var list = [];
            if(type == "all"){
                for(var i = 0; i < inputNode.length; i++){
                    if(check){
                        inputNode[i].checked = true;
                    }else{
                        inputNode[i].checked = false;
                    }
                }
            }else{
                for(var j = 0 ; j < inputNode.length ; j ++){
                    var checkboxType = inputNode[j].getAttribute("checkboxType");
                    if(inputNode[j].checked && checkboxType == "self"){
                        list.push(inputNode[j]);
                    }
                }
                if(list.length == 3){
                    pointerAll.checked = true;
                } else if(list.length == 0){
                    node.checked = true;
                } else {
                    pointerAll.checked = false;
                }
            }
            changeTable();
        }
    }

    createCheckBox("region-radio-wrapper", regionData);
    createCheckBox("product-radio-wrapper", productData);


    function changeTable(){
        var showRegion = document.getElementById("region-radio-wrapper").childNodes;
        var showProduct = document.getElementById("product-radio-wrapper").childNodes;
        var regionList = [], productList = [];

        for(var i = 0; i < showRegion.length; i++){
            if(showRegion[0].checked){
                regionList.push("全选");
            }else if(showRegion[i].checked){
                // 获取 checkbox的文本内容
                regionList.push(showRegion[i].nextSibling.nodeValue);
                console.log(showRegion[i].nextSibling.nodeType)
            }
        }
        for(var i = 0; i < showProduct.length; i++){
            if(showProduct[0].checked){
                productList.push("全选");
            }else if(showProduct[i].checked){
                productList.push(showProduct[i].nextSibling.nodeValue);
            }
        }
        fillTable(regionList, productList);
    }

    function fillTable(regionList, productList){
        var totalList = [], resultList = [], firstDisplay = "", rowSpan = '';
        regionList = regionList.filter(function(item,index,self){
            return self.indexOf(item) == index
        });
        productList = productList.filter(function(item,index,self){
            return self.indexOf(item) == index
        });
        if(regionList.indexOf("全选")!=-1){
            regionList = [""];
        }
        if(productList.indexOf("全选")!=-1){
            productList = [""];
        }

        // 如果没有选地区 直接选商品
        if(regionList.length!=0){
            for(var i in regionList){
                chooseList = sourceData.filter(function(item){
                    return item.region.indexOf(regionList[i]) !=-1;
                });
                // 数组叠加三个方法
                // for(var k in chooseList){
                //     totalList.push(chooseList[k]);
                // }
                // totalList = totalList.concat(chooseList)
                totalList.push.apply(totalList, chooseList);
            }
            for(var j in productList){
                chooseList = totalList.filter(function(item){
                    return item.product.indexOf(productList[j]) !=-1;
                });
                resultList.push.apply(resultList, chooseList);
            }
        }else{
            for(var m in productList){
                chooseList = sourceData.filter(function(item){
                    return item.product.indexOf(productList[m]) !=-1;
                });
                resultList.push.apply(resultList, chooseList);
            }
        }

        // 如果只选择了地区 没有选商品
        if(productList.length == 0){
            resultList = totalList;
        }
        // 判断第一列是地区还是商品
        if(productList.length !=1 && regionList.length == 1 && regionList.indexOf("")==-1){
            firstDisplay = "region";
        }

        // 合并同类
        if( regionList.indexOf("")!=-1){
            rowSpan = '3';
        }else if(regionList.length == 1){
            if(productList.length == 1){
                rowSpan = '1';
            }else if (productList.length == 1){
                rowSpan = '2';
            }else {
                rowSpan = '3';
            }
        }else{
            if(productList.length == 1 || productList.length == 2){
                rowSpan = '2';
            } else {
                rowSpan = '3';
            }
        }

        addTable(resultList, firstDisplay, rowSpan);
    }
