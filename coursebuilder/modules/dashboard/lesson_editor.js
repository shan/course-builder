var FORM = cb_global.form;
var LESSON_CONTENT_FIELD_NAME = 'objectives';

$(function() {

  function editContent() {
    $('#cb-oeditor-form div.inputEx-fieldWrapper').hide();
    $('#cb-oeditor-form div.inputEx-fieldWrapper > .cb-editor-field')
        .parent().show();
  }

  function editSettings() {
    $('#cb-oeditor-form div.inputEx-fieldWrapper').show();
    $('#cb-oeditor-form div.inputEx-fieldWrapper > .cb-editor-field')
        .parent().hide();
  }

  function bind() {
    var tabbar = new TabBar();
    tabbar.addTab('Content', editContent);
    tabbar.addTab('Settings', editSettings);
    tabbar.selectTab(0);
    $('#cb-oeditor-form > fieldset > legend').after(tabbar.getRoot());
  }

  function init() {
    bind();

    // Initial state is editing content
    editContent();

    // Hide the editor label generated by InputEx, and give the editor the extra
    // width
    $('#cb-oeditor-form div.inputEx-fieldWrapper > .cb-editor-field')
        .parent()
        .find('div')
        .eq(0).css('display', 'none').end()
        .eq(1).css('margin-left', '0');

    // Resize the content editor to use all the available height.
    var extraSpace = Math.max(200,
        $(window).height() - $(document.documentElement).height());
    var editorHeight = $('.cb-editor-field .editors-div').height();
    FORM.inputsNames[LESSON_CONTENT_FIELD_NAME]
        ._resize(null, editorHeight + extraSpace);
  }

  init();
});
