// Types can be ambient
// 类型可以是环境
// $('.awesome').show();

// declare var $: any;
// $('.awesome').show();

declare var $: {
    (selector:string): any;    
};
$('.awesome').show();
$(123).show();
