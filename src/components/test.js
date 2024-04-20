function Article(props){
    return <article>
        <h2>{props.title}</h2>
            {props.contents}
    </article>
}

export function Test(){
    <div>
        <Article title="우왁" content="이렇게 쓰는건가"></Article>
    </div>
}

export default Test;