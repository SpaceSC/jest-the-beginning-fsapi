const isNerdy = async (id) => {
  try {
    const response = await fetch(`http://api.icndb.com/jokes/${id}`)
    const joke = await response.json()
    if (joke.type === "success") {
      return joke.value.categories.includes("nerdy")
    }
    else if (joke.type === "NoSuchQuoteException") {
      return null
    } else {
      console.log(joke.type)
      throw "Unknown type"
    }
  } catch (err) {
    console.log(err) // err comes from throw
    return null
  }
}

module.exports = isNerdy
