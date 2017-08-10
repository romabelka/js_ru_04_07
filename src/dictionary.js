let dictionary = {}

dictionary.en = {
    Main_Menu: 'Main Menu',
    articles: 'articles',
    counter: 'counter',
    filters: 'filters',
    comments: 'comments',
    username: 'username',
    Articles_Page: 'Articles Page',
    Pls_select_article: 'Please select article',
    Delete_Article: 'Delete Article',
    show_comments: 'show comments',
    hide_comments: 'hide comments',
    user: 'user',
    comment: 'comment',
    submit: 'submit',
    Loading: 'Loading'
}

const ru = {
    Main_Menu: 'Главное меню',
    articles: 'статьи',
    counter: 'счетчик',
    filters: 'фильтры',
    comments: 'комментарии',
    username: 'пользователь',
    Articles_Page: 'Список Статей',
    Pls_select_article: 'Пожалуйста выберите статью',
    Delete_Article: 'Удалить статью',
    show_comments: 'показать комментарии',
    hide_comments: 'скрыть комментарии',
    user: 'автор',
    comment: 'комментарий',
    submit: 'отправить',
    Loading: 'Загрузка'
}

dictionary.ru = Object.assign({}, dictionary.en, ru)

window.dictionary = dictionary

export default dictionary