const { useState } = require('react')

const [formData, setFormData] = useState({
  provider: '',
  review: '',
})

return (
  <form onSubmit={handleSubmit}>
    <label htmlFor="provider">Provider</label>
    <input list="providers" name="provider">
      <datalist id="providers">
        <option value="Spark" />
        <option value="One NZ" />
        <option value="2Degrees" />
        <option value="Orcon" />
      </datalist>
    </input>
  </form>
)
