function loader(file, done) {
  const data = require(file)
  const result = {}
  if (data.zh) {
    const mapData = data.zh
    console.log(mapData)
    Object.keys(mapData).forEach(key => {
      result[mapData[key]] = key
    })

  }

  console.log(result)
  done(result)
}

module.exports = loader
