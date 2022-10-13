import {useContext, useEffect, useState} from "react";
import axios from "axios";

import {AuthContext} from "App";
import Input from "ui/Input";
import Button from "ui/Button";

import './index.scss';

const Main = () => {
  const {auth} = useContext(AuthContext);
  const [data, setData] = useState({});

  useEffect(() => {
    if (auth) {
      axios.get('/api/v1/data', {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      }).then((response) => {
        setData(response.data)
      });
    }
  }, [])
  console.log('data', data)
  const arrow = '>', plus = '+';
  return (
    <div className="chat-container">
      <div className="main__wrap shadow">
        <div className="main-channels">
          <div className="main-channels__wrap">
            <h3 className="main-channels__title">Каналы</h3>
            <button className="btn btn--size-sm">{plus}</button>
          </div>

        <ul className="main-channels__names">
          {data.channels && data.channels.map((channel) => {
            return (
              <li key={channel.id}><a href="">{channel.name}</a></li>
            )
          })}
        </ul>
        </div>
        <div className="main-message">
          <span className='sdf'>***</span>
          <div className="main-message__header">
            <h3 className="main-message__title">general</h3>
            <div className="main-message__count">1 сообщение</div>
          </div>
          <div className="main-message__container">
            <div className="message">
              <div className="message__username">HotCat:</div>
              <div className="message__text">Привет, Наташа</div>
            </div>
            <div className="message message--right message--bg-color">
              <div className="message__username">Наташа:</div>
              <div className="message__text">Привет, HotCat:) Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, amet aut blanditiis culpa, cupiditate deserunt est eum expedita explicabo impedit, iste laborum magnam minus modi neque nisi numquam optio perspiciatis placeat porro quasi qui quibusdam quidem rerum saepe temporibus veniam veritatis voluptatem voluptatum? Architecto inventore laboriosam libero maxime numquam sed, sint.</div>
            </div>
            <div className="message">
              <div className="message__username">Mira:</div>
              <div className="message__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, amet aut blanditiis culpa, cupiditate deserunt est eum expedita explicabo impedit, iste laborum magnam minus modi neque nisi numquam optio perspiciatis placeat porro quasi qui quibusdam quidem rerum saepe temporibus veniam veritatis voluptatem voluptatum? Architecto inventore laboriosam libero maxime numquam sed, sint.</div>
            </div>
            <div className="message">
              <div className="message__username">HotCat:</div>
              <div className="message__text">consectetur adipisicing elit. A ad, amet aut blanditiis culpa, cupiditate deserunt est eum expedita explicabo impedit, iste laborum magnam minus modi neque nisi numquam optio perspiciatis placeat porro quasi qui quibusdam quidem rerum saepe temporibus veniam veritatis voluptatem voluptatum? Architecto inventore laboriosam libero maxime numquam sed, sint.</div>
            </div>
            <div className="message">
              <div className="message__username">HotCat:</div>
              <div className="message__text">adipisicing elit. A ad, amet aut blanditiis culpa, cupiditate deserunt est eum expedita explicabo impedit, iste laborum magnam minus modi neque nisi numquam optio perspiciatis placeat porro quasi qui quibusdam quidem rerum saepe temporibus veniam veritatis voluptatem voluptatum? Architecto inventore laboriosam libero maxime numquam sed, sint.</div>
            </div>
            <div className="message message--right message--bg-color">
              <div className="message__username">Наташа:</div>
              <div className="message__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, amet aut blanditiis culpa, cupiditate deserunt est eum expedita explicabo impedit, iste laborum magnam minus modi neque nisi numquam optio perspiciatis placeat porro quasi qui quibusdam quidem rerum saepe temporibus veniam veritatis voluptatem voluptatum? Architecto inventore laboriosam libero maxime numquam sed, sint.</div>
            </div>
          </div>
          <div className="main-message__wrap-input">
            <Input placeholder='Введите сообщение'/>
            <Button size={'sm'} absolute>{arrow}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
