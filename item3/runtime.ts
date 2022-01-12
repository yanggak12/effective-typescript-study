interface Square{
    kind: 'square';
    width:number;
}
interface Rectangle {
    kind: 'rectangle';
    width:number;
    height:number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape){
    if(shape.kind === 'rectangle'){
        shape; // 타입이 Rectangle
        return shape.width * shape.height;
    }else{
        shape; // 타입이 Square
        return shape.width * shape.width;
    }
}