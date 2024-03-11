import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead';

function App() {

  return (
    <>
      <label htmlFor="typeahead">Typeahead</label>
      <Typeahead id="typeahead" options={["one", "two", "three"]} isLoading={false} />

      <label htmlFor="async-typeahead">Async Typeahead</label>
      <AsyncTypeahead id="async-typeahead" options={["one", "two", "three"]} isLoading={false} onSearch={function (query: string): void {
        console.log(query)
      } } />

    <label htmlFor="input">Input</label>
      <input id="input" />
    </>
  )
}

export default App
