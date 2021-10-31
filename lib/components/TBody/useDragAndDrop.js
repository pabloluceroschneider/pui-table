"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDragAndDrop = void 0;
var react_1 = require("react");
var useDragAndDrop = function () {
    (0, react_1.useEffect)(function () {
        function handleDragStart(e) {
            e.target.style.opacity = '0.4';
        }
        function handleDragEnd(e) {
            e.target.style.opacity = '1';
            items.forEach(function (item) {
                item.classList.remove('over');
            });
        }
        function handleDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            return false;
        }
        function handleDragEnter(e) {
            e.target.classList.add('over');
        }
        function handleDragLeave(e) {
            e.target.classList.remove('over');
        }
        function handleDrop(e) {
            e.stopPropagation(); // stops the browser from redirecting.
            return false;
        }
        var items = document.querySelectorAll('.t-body__t-row');
        items.forEach(function (item) {
            item.addEventListener('dragstart', handleDragStart);
            item.addEventListener('dragover', handleDragOver);
            item.addEventListener('dragend', handleDragEnd);
            item.addEventListener('dragenter', handleDragEnter);
            item.addEventListener('dragleave', handleDragLeave);
            item.addEventListener('drop', handleDrop);
        });
    }, []);
};
exports.useDragAndDrop = useDragAndDrop;
//# sourceMappingURL=useDragAndDrop.js.map