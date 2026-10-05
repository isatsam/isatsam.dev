import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "isatsam.dev" },
    { name: "description", content: "isatsam.dev" },
  ];
}

export default function Home() {
  return (
    <>
      <h1 className="underscore">isatsam</h1>
      <p>Software developer based in Dublin, Ireland.</p>
      <h2 id="contact">Contact</h2>
      <ul>
        <li><a href="https://github.com/isatsam">My GitHub</a></li>
        <li>Contact me: hello [at] isatsam.dev</li>
      </ul>
    </>
  );
}
