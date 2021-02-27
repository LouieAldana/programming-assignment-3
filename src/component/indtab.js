import './style.css';


function Itab(props) {

    const addstyle = () => {
        if (props.out.id === props.activetab) {
            return { backgroundColor: 'red' }
        }
        else {
            return { backgroundColor: '' }
        }

    };

    console.log(props)

    return (

        //inline styling and on click bind
        <div style={addstyle()} onClick={props.ctab.bind(this, props.out.id)} >{props.out.title}</div>


    );
}


export default Itab;


