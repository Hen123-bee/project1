import type { FormEvent } from "react";

export default function FormSimpe() {
  const OnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const age = Number(fd.get("age"));
    console.log(name, age);
  };

  return (
    <form onSubmit={OnSubmit}>
      <input name="name" placeholder="Nom" />
      <input name="age" type="number" placeholder="Age" />
      <button type="submit">Envoyer</button>
    </form>
  );
}
