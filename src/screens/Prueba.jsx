import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const Prueba = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
      
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const dataProveedor = [
        { id:'', proveedor:'',
        fechaCompra:'',
        tipoPago:'',
        producto:'',
        precio:'',
        cantidad:'',
        total:'', },
        
      ];
    const [data, setData] = useState(dataProveedor);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [modalInsertar, setModalInsertar] = useState(false);
    
    const [paisSeleccionado, setPaisSeleccionado] = useState({
        producto:'',
        precio:'',
        cantidad:''
      });

      const seleccionarPais=(elemento, caso)=>{
        setPaisSeleccionado(elemento);
        (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
          }
        
          const handleChange=e=>{
            const {name, value}=e.target;
            setPaisSeleccionado((prevState)=>({
              ...prevState,
              [name]: value
            }));
          }
        
          const editar=()=>{
            var dataNueva=data;
            dataNueva.map(pais=>{
              if(pais.id===paisSeleccionado.id){
                pais.producto=paisSeleccionado.producto;
                pais.precio=paisSeleccionado.precio;
                pais.cantidad=paisSeleccionado.cantidad;
              }
            });
            setData(dataNueva);
            setModalEditar(false);
          }
        
          const eliminar =()=>{
            setData(data.filter(pais=>pais.id!==paisSeleccionado.id));
            setModalEliminar(false);
          }
        
          const abrirModalInsertar=()=>{
            setPaisSeleccionado(null);
            setModalInsertar(true);
          }
        
          const insertar =()=>{
            var valorInsertar=paisSeleccionado;
            valorInsertar.id=data[data.length-1].id+1;
            var dataNueva = data;
            dataNueva.push(valorInsertar);
            setData(dataNueva);
            setModalInsertar(false);
          }
        
          return (
            <div className="App">
              <h2>compras</h2>
              <br />
            <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button>
            <br /><br />
              <table className="table table-bordered">
                
                  <tr>
                    <th>ID</th>
                    <th>Proveedor</th>
                    <th>Fecha de compra</th>
                    <th>Tipo de pago</th>
                  </tr>
                
                
                  {data.map(elemento=>(
                    <tr>
                      <td>{elemento.id}</td>
                      <td>{elemento.producto}</td>
                      <td>{elemento.precio}</td>
                      <td>{elemento.cantidad}</td>
                      <td><button className="btn btn-primary" onClick={()=>seleccionarPais(elemento, 'Editar')}>Editar</button> {"   "} 
                      <button className="btn btn-danger" onClick={()=>seleccionarPais(elemento, 'Eliminar')}>Eliminar</button></td>
                    </tr>
                  ))
                  }
                
              </table>
        
              <Modal 
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              
                  <div>
                    <h3>Editar producto/proveedor</h3>
                  </div>
               
                
                  <div className="form-group">
                    <label>ID</label>
                    <input
                      className="form-control"
                      readOnly
                      type="text"
                      name="id"
                      value={paisSeleccionado && paisSeleccionado.id}
                    />
                    <br />
        
                    <label>País</label>
                    <input
                      className="form-control"
                      type="text"
                      name="nombre"
                      value={paisSeleccionado && paisSeleccionado.producto}
                      onChange={handleChange}
                    />
                    <br />
        
                    <label>Minutos</label>
                    <input
                      className="form-control"
                      type="text"
                      name="minutos"
                      value={paisSeleccionado && paisSeleccionado.cantidad}
                      onChange={handleChange}
                    />
                    <br />
                  </div>
                
                
                  <button className="btn btn-primary" onClick={()=>editar()}>
                    Actualizar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={()=>setModalEditar(false)}
                  >
                    Cancelar
                  </button>
                
              </Modal>
        
        
              <Modal 
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
                
                  Estás Seguro que deseas eliminar el país {paisSeleccionado && paisSeleccionado.proveedor}
                
                
                  <button className="btn btn-danger" onClick={()=>eliminar()}>
                    Sí
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={()=>setModalEliminar(false)}
                  >
                    No
                  </button>
                
              </Modal>
        
        
                <Modal 
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                
                  <div>
                    <h3>Insertar producto</h3>
                  </div>
                
                
                  <div className="form-group">
                    <label>ID</label>
                    <input
                      className="form-control"
                      readOnly
                      type="text"
                      name="id"
                      value={data[data.length-1].id+1}
                    />
                    <br />
        
                    <label>País</label>
                    <input
                      className="form-control"
                      type="text"
                      name="nombre"
                      value={paisSeleccionado ? paisSeleccionado.producto: ''}
                      onChange={handleChange}
                    />
                    <br />
        
                    <label>Minutos</label>
                    <input
                      className="form-control"
                      type="text"
                      name="minutos"
                      value={paisSeleccionado ? paisSeleccionado.cantidad: ''}
                      onChange={handleChange}
                    />
                    <br />
                  </div>
                
                
                  <button className="btn btn-primary"
                  onClick={()=>insertar()}>
                    Insertar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={()=>setModalInsertar(false)}
                  >
                    Cancelar
                  </button>
                
              </Modal>
            </div>
          );
        }
        
        export default Prueba;