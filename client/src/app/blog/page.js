import Link from 'next/link'
import axios from 'axios'
import Button from './button'
;<Link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

export default function Page() {
  return (
    <div>
      <section className="flex gap-4 font-serif Georgia text-2xl text-right">
        <h1 className="hover:font-bold"> Blog</h1>
        <Link href="/" className="hover:font-bold ">
          Home
        </Link>
      </section>
      <form>
        <section className="flex flex-col gap-4">
          <input
            list="providers"
            name="provider"
            placeholder="Provider"
            className="w-20"
          />
          <datalist id="providers">
            <option value="Spark" />
            <option value="One NZ" />
            <option value="2Degrees" />
            <option value="Orcon" />
          </datalist>
          <input type="text" name="review" placeholder="Review" />
          <section className="space-x-2 > * + *">
            <label>1</label>
            <input type="radio" placeholder="1" />
            <label>2</label>
            <input type="radio" placeholder="2" />
            <label>3</label>
            <input type="radio" placeholder="3" />
            <label>4</label>
            <input type="radio" placeholder="4" />
            <label>5</label>
            <input type="radio" placeholder="5" />
          </section>
          <Button>Add</Button>
        </section>
      </form>
    </div>
  )
}
