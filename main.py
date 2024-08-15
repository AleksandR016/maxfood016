import asyncio
from aiogram import Bot, Dispatcher, Router, types
from aiogram.filters import Command
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton
import webbrowser


API_TOKEN = "6705003200:AAGY4YMSsom0zr0vigX2_VUwhKeiUcrJqkA"

bot = Bot(token=API_TOKEN)
dp = Dispatcher()
router = Router()





@router.message(Command('start'))
async def start_message(message: types.Message):
    markup = ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(text="Русский язык")],
            [KeyboardButton(text="O'zbek tili")],
            [KeyboardButton(text="English Languages")]
        ],
        resize_keyboard=True
    )
    await message.answer("Добро пожаловать в бот Max Food! Бот поможет вам заказать еду на вынос, узнавать о новых акциях, скидках, а также следить за нашим творчеством!\n\nДля продолжения выберите язык!", reply_markup=markup)

@router.message(lambda message: message.text == 'Русский язык')
async def language_russian(message: types.Message): 
    markup = ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(text="Заказать еду")],
            [KeyboardButton(text="Обратная связь")]
        ],
        resize_keyboard=True
    )
    await message.answer("Вы выбрали русский язык! Выберите тему которая вас заинтерисовала!", reply_markup=markup)

@router.message(lambda message: message.text == "O'zbek tili")
async def language_uzbek(message: types.Message):
    markup = ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(text="Ovqatga buyurtma bering")],
            [KeyboardButton(text="Qayta aloqa")]
        ],
        resize_keyboard=True
    )
    await message.answer("Siz o'zbek tilini tanladingiz! Sizni qiziqtirgan mavzuni tanlang!", reply_markup=markup)

@router.message(lambda message: message.text == 'English Languages')
async def language_english(message: types.Message):
    markup = ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(text="Order the menu")],
            [KeyboardButton(text="Support")]
        ],
        resize_keyboard=True
    )
    await message.answer("You chose English Language!", reply_markup=markup)



async def main():
    dp.include_router(router)
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
