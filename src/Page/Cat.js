import '../App.css';
import { Get } from 'react-axios';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { Link, useLocation } from 'react-router-dom'

export const Cat = () => {

  const titleName = 'Cat breeds’';

  return (
    <div className='mystyle'>
      <h1>{titleName}</h1>
      <Get url="https://api.thecatapi.com/v1/breeds">
        {(error, response, isLoading, makeRequest, axios) => {
          if (error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
          }
          else if (isLoading) {
            return (<div>Loading...</div>)
          }
          else if (response !== null) {
            const columns = [
              {
                title: 'Name',
                dataIndex: 'name',
                render: (_, catDetail) => <Link to="/Detail" state={{ img: catDetail.image ? catDetail.image.url : null, text: catDetail.name }}> {catDetail.name} </Link>
                ,
              },
              {
                title: 'Image',
                dataIndex: 'img',
                render: (_, CatImage) => <a>{CatImage.image ? CatImage.image.url : null}</a>,
              },
            ];
            return <Table dataSource={response.data} columns={columns} />;
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Get>
    </div>
  )
}

export const Detail = () => {

  const location = useLocation();

  return (
    <div className='catDivImage'>
      <img className='catImage' src={location.state.img} />
      <h1>Name:{location.state.text}</h1>
    </div>
  );
}