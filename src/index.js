/**
 * 할 일(Todo) 아이템 객체입니다.
 * @typedef {Object} Todo
 * @property {string} id - 할 일의 ID
 * @property {string} content - 할 일의 내용
 * @property {boolean} done - 현재 할 일의 완료 여부
 * @property {string} category - 할 일의 카테고리
 * @property {string[]} [tags] - 할 일 아이템과 관련 있는 태그의 문자열 배열
 */

/**
 * 새 할 일(Todo)의 내용이 담긴 객체입니다.
 * @typedef {Object} UpdatedTodo
 * @property {string} [content] - 할 일의 내용
 * @property {boolean} [done] - 현재 할 일의 완료 여부
 * @property {string} [category] - 할 일의 카테고리
 * @property {string[]} [tags] - 할 일 아이템과 관련 있는 태그의 문자열 배열
 */

/**
 * 새 할 일을 생성하는 함수입니다.
 * @param {Todo} todo - 할 일 객체
 */
function createTodo(todo) {}

/**
 * 모든 할 일을 조회하는 함수입니다.
 * @returns {Todo[]} 모든 할 일 객체가 담긴 배열
 */
function getAllTodos() {}

/**
 * ID를 기반으로 특정 할 일을 조회하는 함수입니다.
 * @param {string} id - 조회할 할 일의 ID
 * @returns {Todo} 해당 ID를 갖는 할 일 객체
 */
function getTodoById(id) {}

/**
 * 특정 ID를 가진 할 일의 모든 내용을 수정하는 함수입니다.
 * @param {string} id - 수정할 할 일의 ID
 * @param {UpdatedTodo} newTodo - 할 일의 새 내용이 담긴 객체
 */
function updateTodo(id, newTodo) {}

/**
 * 특정 ID를 가진 할 일의 특정 태그를 수정하는 함수입니다.
 * @param {string} id - 수정할 할 일의 ID
 * @param {string[]} oldTags - 수정할 태그 문자열이 담긴 배열
 * @param {string[]} newTags - 수정 이후의 태그 문자열이 담긴 배열
 */
function updateTags(id, oldTags, newTags) {}

/**
 * 특정 ID를 가진 할 일을 삭제하는 함수입니다.
 * @param {string} id - 삭제할 할 일의 ID
 */
function deleteTodoById(id) {}

/**
 * 모든 할 일을 삭제하는 함수입니다.
 */
function deleteAllTodos() {}

/**
 * 특정 ID를 가진 할 일의 특정 태그를 삭제하는 함수입니다.
 * @param {string} id - 특정 태그를 삭제할 할 일의 ID
 * @param {string[]} oldTags - 삭제할 태그 문자열이 담긴 배열
 */
function deleteTags(id, oldTags) {}

/**
 * 특정 ID를 가진 할 일의 모든 태그를 삭제하는 함수입니다.
 * @param {string} id - 모든 태그를 삭제할 할 일의 ID
 */
function deleteAllTags(id) {}