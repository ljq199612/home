// ==UserScript==
// @name         百度搜索优化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/*
// @icon         https://ljq199612.gitee.io/volumn/favicon.gif
// @grant        none
// ==/UserScript==

/**
BUGS:
[1] 点击搜索工具，过滤后页面效果失效

*/

(function() {
    'use strict';
    main();

    $("#head,#page").on("click", interval);
    // 头部， 搜索工具栏
    $(".outer_wqJjM").on("click", interval);
    function interval(){
        let count = 0;
        let timer = window.setInterval(function(){
            count++;
            main();
            if(count > 100){
                window.clearInterval(timer);
            }
        }, 100);
    }

    // 搜索结果带边框的调整
    $('#content_left  div.c-border, div.re-box_2CJ9w, div.single-card-wrapper_2nlg9').css('margin', '0');

    function main(){
        /** 内容区 */
        let $main = document.querySelector('#container');
        $main.style.margin = '0 0 0 150px';
        $main.style.width = '100%';

        /* 左边搜索的结果 */
        let $left = document.querySelector('#content_left');
        if($left != undefined){
          $left.style.width = '60%';
          let left_unit = $left.querySelectorAll('[class*=result]');
          //let left_unit = $left.children;
          for(let index in left_unit){
            let node = left_unit[index];
            if(node.style !== undefined){
              node.style.width = '100%';
              node.style.background = 'rgba(206, 203, 203, 0.08)';
              node.style.padding = '.1rem';
            }
          }
        }

        $("div[tpl='recommend_list']").css('background', 'none');

        /* 右边推荐的新闻 */
        let $right = document.querySelector('#content_right');
        $right.style.width = '30%';
        //$right.style.float = 'left';

        $right.innerHTML =
        `<div id='my-note' style="background:none; font-size:.4rem;">
           <ul style='line-height:1.2'>
             <li>明</li> <li>德</li>  <li>求</li> <li>索</li>
             <li style='padding:.2rem 0'></li>
             <li>锲</li> <li>而</li>  <li>不</li> <li>舍</li>
           </ul>
         </div>`;

        /* 底部相关推荐 */
        let $bottom = document.querySelector('#rs_new');
        if($bottom != undefined){
            $bottom.style.display = 'none';
        }
    }









})();
