import { useEffect } from 'react';

export const useDragAndDrop = () => {
  useEffect(() => {
		function handleDragStart(e: any) {
			e.target.style.opacity = '0.4';
		}

		function handleDragEnd(e: any) {
			e.target.style.opacity = '1';
			items.forEach(function (item) {
				item.classList.remove('over');
			});
		}
		function handleDragOver(e: any) {
			if (e.preventDefault) {
				e.preventDefault();
			}
	
			return false;
		}
	
		function handleDragEnter(e: any) {
			e.target.classList.add('over');
		}
	
		function handleDragLeave(e: any) {
			e.target.classList.remove('over');
		}
		function handleDrop(e: any) {
			e.stopPropagation(); // stops the browser from redirecting.
			return false;
		}

		let items = document.querySelectorAll('.t-body__t-row');
		items.forEach(function(item) {
			item.addEventListener('dragstart', handleDragStart);
			item.addEventListener('dragover', handleDragOver);
			item.addEventListener('dragend', handleDragEnd);
			item.addEventListener('dragenter', handleDragEnter);
			item.addEventListener('dragleave', handleDragLeave);
			item.addEventListener('drop', handleDrop);
		});
	}, []);
}