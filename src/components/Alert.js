import React from 'react'

export default function Alert(props) {
    const capatilize=(word)=>{
        word=word.toLowerCase();
        return word[0].toUpperCase()+word.slice(1)

    }
    return (
      props.alert &&  <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capatilize( props.alert.type)} : </strong> {props.alert.msg}
 
</div>
    )
}
