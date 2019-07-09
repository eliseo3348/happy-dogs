import React, { useState } from "react";

export default function Formulario() {
  const [name, setName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [phone, setPhone] = useState(" ");
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

  function modArray(namei, lastNamei, phonei) {
    const elements = {
      name: namei,
      lastName: lastNamei,
      phone: phonei
    };
    const statecopy = send;
    // console.log(elements);
    statecopy.push(elements);
    // console.log(statecopy);
    setSend(statecopy);
    //console.log(send);
  }

  const showData = () => {
    console.log({ send });
    return send.map((send2, index) => {
      return <div key={index}>{showName(send2.name)}</div>;
    });
  };

  const showName = name => {
    //console.log(name);
    return <div>{name}</div>;
  };

  const forms = forms => {
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
              <button onClick={() => modArray(name, lastName, phone)}>
                Guardar
              </button>
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
