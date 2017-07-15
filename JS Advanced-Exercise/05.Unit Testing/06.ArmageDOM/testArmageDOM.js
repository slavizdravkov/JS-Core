let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let nuke = function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
};

describe("ArmageDom tests", function () {
   let targetHTML;
    beforeEach(function () {
       document.body.innerHTML = `<body>
            <div id="target">
                <div class="nested target">
                    <p>This is some text</p>
                </div>
                <div class="target">
                    <p>Empty div</p>
                </div>
                <div class="inside">
                    <span class="nested">Some more text</span>
                    <span class="target">Some more text</span>
                </div>
            </div>
            </body>`;
        targetHTML = $('#target');
   });

   it("With valid and non valid selector", function () {
       let sel1 = $('.inside');
       let sel2 = 13;
       let oldHTML = targetHTML.html();
       nuke(sel1, sel2);
       expect(targetHTML.html()).to.be.equal(oldHTML);
   });

   it("With equal selectors", function () {
       let sel1 = $('.inside');
       let oldHTML = targetHTML.html();
       nuke(sel1, sel1);
       expect(targetHTML.html()).to.be.equal(oldHTML);
   });

   it("With tho valid selectors", function () {
       let sel1 = $('.nested');
       let sel2 = $('.target');
       let oldHTML = targetHTML.html();
       nuke(sel1, sel2);
       expect(targetHTML.html()).to.not.equal(oldHTML);
   });

   it("With two valid selectors (should not change anything)", function () {
       let sel1 = $('.nested');
       let sel2 = $('.inside');
       let oldHTML = targetHTML.html();
       nuke(sel1, sel2);
       expect(targetHTML.html()).to.be.equal(oldHTML);
   });
});

