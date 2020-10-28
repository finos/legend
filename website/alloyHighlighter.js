/*
 * Language: Alloy
 * Author: James Bracegirdle <james.bracegirdle@gs.com>
 * Website: https://legend.finos.org
 */
function alloyHighlighter(hljs) {
  const KEYWORDS =
    'false true extends function projects if toString';
  //'Profile Enum Association Mapping Database Diagram Flatten';
  const IDENT_RE = '[\u00C0-\u02B8a-zA-Z_$][\u00C0-\u02B8a-zA-Z_$0-9]*';
  const ANNOTATION_RE = `${IDENT_RE}\\.${IDENT_RE}`;

  const VARIABLE_MODE = {
    begin: /\$/, end: /[^a-zA-Z\d]/, excludeEnd: true,
    className: 'variable'
  };

  return {
    aliases: ['pure'],
    keywords: KEYWORDS,
    illegal: /<\/|#/,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      VARIABLE_MODE,
      hljs.NUMBER_MODE,
      {
        className: 'type',
        begin: ':', end: /[;,${}]/,
        excludeBegin: true, excludeEnd: true,
      },
      {
        className: 'name',
        begin: '->', end: /\(/,
        excludeBegin: true, excludeEnd: true,
      },
      {
        className: 'class',
        beginKeywords: 'Class', end: /{/, excludeEnd: true,
        keywords: 'Class',
        contains: [
          { begin: '<<', end: '>>', contains: [hljs.UNDERSCORE_TITLE_MODE] },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        className: 'class',
        beginKeywords: 'Enum', end: /{/, excludeEnd: true,
        keywords: 'Enum',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        className: 'class',
        beginKeywords: 'Mapping', end: /\)/, excludeEnd: true,
        keywords: 'Mapping ' + KEYWORDS,
        returnBegin: true,
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          {
            begin: 'Mapping', end: /\(/, excludeBegin: true, excludeEnd: true,
            className: 'title'
          },
          {
            className: 'number',
            begin: '\\[', end: '\\]'
          },
          VARIABLE_MODE

        ]
      }
    ]
  };
}

module.exports = alloyHighlighter;