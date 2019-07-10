import React, { useState, useRef, useEffect } from "react";

export default function Formulario() {
  const [name, setName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [phone, setPhone] = useState(undefined);
  const [send, setSend] = useState([]);

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeLastName = e => {
    setLastName(e.target.value);
  };

  const handleChangePhone = e => {
    setPhone(e.target.value);
  };

  function modArray() {
    const elements = {
      name,
      lastName,
      phone
    };
    const statecopy = send;
    statecopy.push(elements);
    setSend(statecopy);
    setPhone("");
    setName("");
    setLastName("");
  }

  const showData = () => {
    return send.map((send2, index) => {
      return (
        <div key={index}>
          <div>Nombre: {send2.name}</div>
          <div>Apellido: {send2.lastName}</div>
          <div>Telefono: {send2.phone}</div>
        </div>
      );
    });
  };

  const forms = () => {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div>
            <div>
              <label>
                Nombre:
                <input type="text" value={name} onChange={handleChangeName} />
              </label>
            </div>
            <div>
              <label>
                Apellido:
                <input
                  type="text"
                  value={lastName}
                  onChange={handleChangeLastName}
                />
              </label>
            </div>
            <div>
              <label>
                Telefono:
                <input type="text" value={phone} onChange={handleChangePhone} />
              </label>
              <button onClick={() => modArray()}>Guardar</button>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div>{showData()}</div>
        </div>
      </div>
    );
  };

  return <div>{forms()}</div>;
}
