var styles = ['Jazz', 'Blues']
styles[styles.length] = 'Rok-n-Roll'
styles[styles.length-2] = 'Classic'

alert(styles.shift())
styles.unshift('Rap','Reggae')

alert(styles)