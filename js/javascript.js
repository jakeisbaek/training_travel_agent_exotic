$(document).ready(()=>{

    for(let n=1; n<9; n++){
        $(`#point-${n}`).mouseover(()=>{
            $('.island-info').hide();
            $(`.island-${n}`).show('fast');
        })
    }

});