export function getSpecial({special}){
    const arr = special.map(item => {
        return item['description']
            ? item : {...item, description: 'Описание недоступно'}
    })
    return arr
  }


