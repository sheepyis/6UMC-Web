document.addEventListener('DOMContentLoaded', function () {
    const addListInput = document.getElementById('addList');
    const todoList = document.querySelector('.left .todoList');
    const doneList = document.querySelector('.right .todoList');

    // 엔터 시 할 일 추가
    addListInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const inputValue = addListInput.value;
            if (inputValue !== '') {
                const listItem = createListItem(inputValue);
                todoList.appendChild(listItem);
                addListInput.value = '';
            }
        }
    });

    function createListItem(text) {
        // 해야 할 일
        // todoItem: 목록 항목의 하위의 상단 부분
        const todoItem = document.createElement('div');
        todoItem.classList.add('todoTop');

        const todoTitle = document.createElement('p');
        todoTitle.textContent = text;
        todoTitle.id = 'todoTitle';

        // 완료 버튼
        const finishBtn = document.createElement('button');
        finishBtn.textContent = '완료';
        finishBtn.addEventListener('click', function () {
            //parentNode: 할 일 항목 전체 이동(todoItem)
            moveItem(todoItem.parentNode, todoList, doneList);

            // 삭제 버튼
            finishBtn.textContent = '삭제';
            finishBtn.addEventListener('click', function () {
                listItem.remove();
            })
        });

        todoItem.appendChild(todoTitle);
        todoItem.appendChild(finishBtn);

        const todoBottom = document.createElement('div');
        todoBottom.classList.add('todoBottom');

        // 해낸 일
        // listItem: 각 항목의 상단 + 하단
        const listItem = document.createElement('div');
        listItem.classList.add('todoList');

        listItem.appendChild(todoItem);
        listItem.appendChild(todoBottom);

        return listItem;
    }

    function moveItem(item, fromList, toList) {
        fromList.removeChild(item);
        toList.appendChild(item);
    }
});
