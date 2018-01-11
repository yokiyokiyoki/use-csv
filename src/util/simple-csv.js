//简单生成csv格式的逻辑仅供理解
const newLine = '\r\n';
export default function (columns, datas, separator = ',', noHeader = false) {

    const content = [];

    content.push(columns.join(separator));

    datas.forEach(data => {
        let values = Object.values(data);
        content.push(values.join(separator));
    });
    return content.join(newLine);

}