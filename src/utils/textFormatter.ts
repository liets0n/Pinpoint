type Text = number | string | boolean

function formatText(text: Text) {
  let formattedText: Text = ''

  switch (text) {
    case '':
    case null:
    case 'null null':
    case 'Invalid Date':
    case 'null (null)':
    case '+null': {
      formattedText = '-'
      break
    }
    case true: {
      formattedText = 'Yes'
      break
    }
    case false: {
      formattedText = 'No'
      break
    }
    default: {
      formattedText = text
    }
  }

  if (String(formattedText).length >= 40) {
    return `${String(formattedText).slice(0, 40)}...`
  }

  return formattedText
}

export default formatText
