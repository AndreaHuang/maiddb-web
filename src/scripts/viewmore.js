import $ from 'jquery';
// "<div> 
    //    <p>
    //      <span class="viewMore"></span>
    //    </p>
    //    <p>
    //       <span class="viewMore"></span>
    //     </p>
    //   </div>"
    function init(){
    console.log("init called");
     $("p").has("span.viewMore").siblings().hide();
     $("p").has("span.viewMore").show();
     $("span.viewMore").show();
     $("span.viewLess").hide();
    //  $("span.viewMore").siblings().hide();
     $("span.viewLess").on("click",function(){
            console.log("viewLess is click");
            collapse($(this));
        });
        $("span.viewMore").on("click",function(){
            console.log("viewMore is click");
            expand($(this));
        });
    }
    function expand(current){
          
          $("p, p > span.viewLess",current.parent().parent()).show();
          current.siblings().show();
          current.hide();
      }

    function collapse(current){
          const div = current.parent().parent();
          const firstParagraph = $("p:has(span.viewMore)",div);
          const viewMore =  $("span.viewMore",firstParagraph);

          current.hide(); //hide itself
          $("*",div).hide(); //hide all p
          firstParagraph.show();
          viewMore.show();
          viewMore.siblings().hide();
    }
    
    // $(document).ready(function(){
    //     init();
    //     $("span.viewLess").click("click",function(){
    //         console.log("viewLess is click");
    //         collapse($(this));
    //     });
    //     $("span.viewMore").click("click",function(){
    //         console.log("viewMore is click");
    //         expand($(this));
    //     });
    // });


    export default{
        init,
        expand,
        collapse,
    }