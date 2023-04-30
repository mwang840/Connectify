// import { FC } from 'react'

function Welcome(props: { name: string; }) {
    return <h1>Hello, {props.name}</h1>;
  }

function ValueProp(props: { title: string, text: string;}) {
    return <div> 
        <h1 className="value-prop-title">{props.title}</h1> 
        <p className="value-prop-body">{props.text}</p>
    </div>;
}

export default ValueProp;