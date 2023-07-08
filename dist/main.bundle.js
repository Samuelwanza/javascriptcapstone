"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjavascript_capstone"] = self["webpackChunkjavascript_capstone"] || []).push([["main"],{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   COMMENTS_API: () => (/* binding */ COMMENTS_API),\n/* harmony export */   LIKES_API: () => (/* binding */ LIKES_API),\n/* harmony export */   MOVIES_API: () => (/* binding */ MOVIES_API)\n/* harmony export */ });\nconst MOVIES_API = 'https://api.tvmaze.com/shows';\nconst LIKES_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PVsyyzJcjAI3kwRWNz7v/likes';\nconst COMMENTS_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PVsyyzJcjAI3kwRWNz7v';\n\n//# sourceURL=webpack://javascript_capstone/./config.js?");

/***/ }),

/***/ "./modules/addComments.js":
/*!********************************!*\
  !*** ./modules/addComments.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createComment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createComment */ \"./modules/createComment.js\");\n\nconst addComments = async () => {\n  document.querySelectorAll('.like').forEach(async element => {\n    const id = parseInt(element.getAttribute('data-id'), 10);\n    element.closest('.grid-item').querySelector('.submit-button').addEventListener('click', async () => {\n      const user = element.closest('.grid-item').querySelector('.user');\n      const usercomment = element.closest('.grid-item').querySelector('.usercomment');\n      if (user.value !== '' && usercomment.value !== '') {\n        await (0,_createComment__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, user.value, usercomment.value);\n        window.location.reload();\n      }\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComments);\n\n//# sourceURL=webpack://javascript_capstone/./modules/addComments.js?");

/***/ }),

/***/ "./modules/addLikes.js":
/*!*****************************!*\
  !*** ./modules/addLikes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postAPI */ \"./modules/postAPI.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\n\nconst addLikes = () => {\n  document.querySelectorAll('.like').forEach(element => {\n    const id = element.getAttribute('data-id');\n    element.addEventListener('click', () => {\n      const html = element.previousSibling.previousSibling.innerHTML;\n      element.previousSibling.previousSibling.innerHTML = parseInt(html, 10) + 1;\n      (0,_postAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_config__WEBPACK_IMPORTED_MODULE_1__.LIKES_API, parseInt(id, 10));\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLikes);\n\n//# sourceURL=webpack://javascript_capstone/./modules/addLikes.js?");

/***/ }),

/***/ "./modules/createComment.js":
/*!**********************************!*\
  !*** ./modules/createComment.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\nconst createComment = async (id, username, comment) => {\n  const commentCreation = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__.COMMENTS_API}/comments`, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8'\n    },\n    body: JSON.stringify({\n      item_id: id,\n      username,\n      comment\n    })\n  });\n  const commentstatus = await commentCreation.status;\n  return commentstatus;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createComment);\n\n//# sourceURL=webpack://javascript_capstone/./modules/createComment.js?");

/***/ }),

/***/ "./modules/fetchAPI.js":
/*!*****************************!*\
  !*** ./modules/fetchAPI.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchAPI = async url => {\n  let data = '';\n  try {\n    const response = await fetch(url);\n    const result = await response.json();\n    data = result;\n  } catch (error) {\n    return error;\n  }\n  return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAPI);\n\n//# sourceURL=webpack://javascript_capstone/./modules/fetchAPI.js?");

/***/ }),

/***/ "./modules/formatDate.js":
/*!*******************************!*\
  !*** ./modules/formatDate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formatDate = dateString => {\n  const date = new Date(dateString);\n  const day = date.getDate().toString().padStart(2, '0');\n  const month = (date.getMonth() + 1).toString().padStart(2, '0');\n  const year = date.getFullYear().toString();\n  return `${day}/${month}/${year}`;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDate);\n\n//# sourceURL=webpack://javascript_capstone/./modules/formatDate.js?");

/***/ }),

/***/ "./modules/getComments.js":
/*!********************************!*\
  !*** ./modules/getComments.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\nconst getComments = async id => {\n  try {\n    const getAllComments = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__.COMMENTS_API}/comments?item_id=${id}`, {\n      method: 'GET',\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8'\n      }\n    });\n    const comments = await getAllComments.json();\n    return comments;\n  } catch (error) {\n    return error;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://javascript_capstone/./modules/getComments.js?");

/***/ }),

/***/ "./modules/loadComments.js":
/*!*********************************!*\
  !*** ./modules/loadComments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments */ \"./modules/getComments.js\");\n/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatDate */ \"./modules/formatDate.js\");\n\n\nconst loadcomments = async () => {\n  document.querySelectorAll('.like').forEach(async element => {\n    const id = parseInt(element.getAttribute('data-id'), 10);\n    const comments = await (0,_getComments__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n    const commentsTitle = element.closest('.grid-item').querySelector('.comments-title');\n    commentsTitle.textContent = `Comments(${comments.length})`;\n    if (comments.length > 0) {\n      const commentsContainer = element.closest('.grid-item').querySelector('.comments');\n      commentsContainer.innerHTML = '';\n      comments.forEach(thiscomment => {\n        const {\n          comment,\n          creation_date: creationdate,\n          username\n        } = thiscomment;\n        const formattedDate = (0,_formatDate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(creationdate);\n        const commentHTML = `\n          <p>${formattedDate} ${username}: ${comment}</p>\n        `;\n        commentsContainer.insertAdjacentHTML('beforeend', commentHTML);\n      });\n    } else {\n      const commentsContainer = element.parentElement.nextElementSibling.querySelector('.comments');\n      commentsContainer.innerHTML = '';\n      const commentHTML = `\n          <p>${comments}</p>\n        `;\n      commentsContainer.insertAdjacentHTML('beforeend', commentHTML);\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadcomments);\n\n//# sourceURL=webpack://javascript_capstone/./modules/loadComments.js?");

/***/ }),

/***/ "./modules/popUp.js":
/*!**************************!*\
  !*** ./modules/popUp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popUp = () => {\n  const commentButtons = document.querySelectorAll('.comment-btn');\n  commentButtons.forEach(button => {\n    button.addEventListener('click', event => {\n      const popup = event.target.parentNode.parentNode.querySelector('.popup');\n      popup.classList.toggle('hide');\n    });\n  });\n  const crossx = document.querySelectorAll('.cross-container');\n  crossx.forEach(cross => {\n    cross.addEventListener('click', event => {\n      const popup = event.currentTarget.closest('.popup');\n      popup.classList.toggle('hide');\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUp);\n\n//# sourceURL=webpack://javascript_capstone/./modules/popUp.js?");

/***/ }),

/***/ "./modules/postAPI.js":
/*!****************************!*\
  !*** ./modules/postAPI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postAPI = (url, id) => {\n  try {\n    fetch(url, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8'\n      }\n    });\n  } catch (error) {\n    throw error('Error posting like', error);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postAPI);\n\n//# sourceURL=webpack://javascript_capstone/./modules/postAPI.js?");

/***/ }),

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI */ \"./modules/fetchAPI.js\");\n/* harmony import */ var _addLikes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addLikes */ \"./modules/addLikes.js\");\n/* harmony import */ var _popUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popUp */ \"./modules/popUp.js\");\n/* harmony import */ var _loadComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadComments */ \"./modules/loadComments.js\");\n/* harmony import */ var _addComments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addComments */ \"./modules/addComments.js\");\n/* harmony import */ var _showLikes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showLikes */ \"./modules/showLikes.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\n\n\n\n\n\n\nconst showRender = async () => {\n  const movies = await (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_config__WEBPACK_IMPORTED_MODULE_6__.MOVIES_API);\n  const likes = await (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_config__WEBPACK_IMPORTED_MODULE_6__.LIKES_API);\n  const container = document.querySelector('.shows');\n  const showCount = document.querySelector('.count');\n\n  // const comments = await getComments(2);\n\n  // console.log(comments);\n\n  let placeholder = '';\n  for (let i = 0; i < 15; i += 1) {\n    const movie = movies[i];\n    const like = likes[i];\n    const [...genre] = movie.genres;\n    placeholder += `\n      <div class=\"grid-item\" >\n        <img src=\"${movie.image.medium}\" alt=\"${movie.name}\"/>\n        <div class=\"title\">\n          <p>${movie.name}</p>\n          <div>\n            <span>${parseInt(like.likes, 10)}</span>\n            <i class=\"fa-regular fa-heart like\" data-id=\"${movie.id}\"></i>\n          </div>\n        </div>\n        <div class=\"btns\">\n          <button class=\"comment-btn btn\">Comment</button>\n          <button class=\"reserve-btn btn\">Reservation</button>\n        </div>\n        <div class=\"popup hide\">\n          <div class=\"wrapper\">\n            <img src=\"${movie.image.original}\" alt=\"${movie.name}\"/>\n            <div class=\"cross-container\">\n              <div class=\"vertical-line\"></div>\n              <div class=\"horizontal-line\"></div>\n            </div>\n            <h2>${movie.name}</h2>\n            <div class=\"divider\">\n              <p>genres:  ${genre}<p>\n              <p>language:  ${movie.language}<p>\n            </div>\n            <div class=\"divider\">\n              <p>premiered:  ${movie.premiered}<p>\n              <p>rating:  ${movie.rating.average}<p>\n            </div>\n\n            <p>${movie.summary}</p>\n\n            <h3 class=\"comments-title\"></h3>\n            <ul class=\"comments\">\n              <p>03/11/2021 Alex:I would love to buy it</p>\n              <p>03/11/2021 Mia:I love</p>\n            </ul>\n            \n            <h3>Add a comment</h3>\n            <div class=\"comment-input\">\n              <input type=\"text\" placeholder=\"Your name\" class=\"user\" />\n              <input type=\"text\" placeholder=\"Your insights\" class=\"usercomment\" />\n              <button class=\"submit-button btn\">Comment</button>\n            </div>  \n          </div>\n        \n        </div>\n      </div>\n    `;\n  }\n  container.innerHTML = placeholder;\n  (0,_addLikes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_popUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_loadComments__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_addComments__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  const count = await (0,_showLikes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  showCount.innerHTML = `${count.length} Shows`;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showRender);\n\n//# sourceURL=webpack://javascript_capstone/./modules/render.js?");

/***/ }),

/***/ "./modules/showLikes.js":
/*!******************************!*\
  !*** ./modules/showLikes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI */ \"./modules/fetchAPI.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\n\nconst showLikes = async () => {\n  const likes = await (0,_fetchAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_config__WEBPACK_IMPORTED_MODULE_1__.LIKES_API);\n  return likes;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showLikes);\n\n//# sourceURL=webpack://javascript_capstone/./modules/showLikes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/render */ \"./modules/render.js\");\n\n\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://javascript_capstone/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  font-family: 'Nunito', sans-serif;\n}\n\nbody {\n  background-color: rgb(20, 15, 42);\n}\n\n.nav {\n  margin: 0;\n  padding: 10px;\n  color: azure;\n  display: flex;\n  justify-content: space-around;\n  background-color: rgb(16, 12, 33);\n}\n\n.nav li {\n  list-style-type: none;\n}\n\n.nav-items {\n  display: flex;\n  padding-bottom: 8px;\n}\n\n.nav-items li {\n  padding: 0 20px;\n}\n\nfooter {\n  color: aliceblue;\n  text-align: center;\n}\n\nfooter a {\n  color: aliceblue;\n  text-decoration: none;\n}\n\nmain {\n  width: 1200px;\n  margin: 0 auto;\n}\n\n.shows {\n  display: inline-grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  gap: 20px;\n  margin-left: 35px;\n  margin-top: 30px;\n}\n\n.title {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0;\n  top: -76px;\n  color: #fff;\n  text-align: center;\n  padding: 10px;\n  background:\n    linear-gradient(\n      to top,\n      black,\n      #000000c4,\n      transparent\n    );\n}\n\n.btns {\n  position: relative;\n  top: -72px;\n  display: flex;\n  flex-direction: column;\n}\n\n.btn {\n  border: none;\n  margin-bottom: 10px;\n  padding: 10px 0;\n  background: #f15967;\n  color: #fff;\n  font-weight: 600;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\ni.fa-regular.fa-heart {\n  cursor: pointer;\n}\n\n.pop-up-container {\n  position: fixed;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  z-index: 9999;\n  opacity: 0.1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.popup {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgb(20, 15, 42);\n  padding-top: 5vh;\n  padding-bottom: 5vw;\n  padding-left: 10vw;\n  padding-right: 10vw;\n  width: 100vw;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 9999;\n  overflow-y: auto;\n  max-height: 100vh;\n  color: white;\n}\n\n.hide {\n  display: none;\n}\n\n.wrapper {\n  margin-right: 20vw;\n  padding-bottom: 10vh;\n  position: relative;\n}\n\n.wrapper > img {\n  height: 70vh;\n  border-radius: 20px;\n  position: relative;\n}\n\n.divider {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 600;\n}\n\n.popupimage {\n  position: absolute;\n  top: 0;\n  right: 10%;\n}\n\n.cross-container {\n  position: absolute;\n  top: 10px;\n  right: -40px;\n  transform: rotate(45deg);\n  cursor: pointer;\n}\n\n.vertical-line,\n.horizontal-line {\n  position: absolute;\n  background-color: white;\n  width: 5px;\n  height: 20px;\n  top: 50%;\n  left: 50%;\n  transform-origin: center center;\n}\n\n.vertical-line {\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.horizontal-line {\n  transform: translateX(-50%) translateY(-50%) rotate(90deg);\n}\n\nul {\n  padding-inline-start: 0;\n}\n\n.comment-input {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  row-gap: 20px;\n  justify-content: flex-start;\n}\n\n.usercomment {\n  height: 50px;\n}\n\ninput {\n  padding: 5px;\n  border-radius: 5px;\n  border: none;\n  width: 400px;\n}\n\nbutton {\n  background-color: #f15967;\n  border: none;\n  cursor: pointer;\n}\n\nbutton.submit-button.btn {\n  width: 408px;\n  font-size: 16px;\n}\n\n.image {\n  width: 50px;\n  height: 50px;\n  border-radius: 5px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript_capstone/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript_capstone/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript_capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);