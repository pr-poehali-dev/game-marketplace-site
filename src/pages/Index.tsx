import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (game: any) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === game.id);
      if (existingItem) {
        toast({
          title: "Игра уже в корзине",
          description: `${game.title} уже добавлена в корзину`,
        });
        return prev;
      }
      toast({
        title: "Добавлено в корзину",
        description: `${game.title} добавлена в корзину`,
      });
      return [...prev, game];
    });
  };

  const removeFromCart = (gameId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== gameId));
    toast({
      title: "Удалено из корзины",
      description: "Игра удалена из корзины",
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ""));
      return total + price;
    }, 0);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term) {
      toast({
        title: "Поиск",
        description: `Ищем игры по запросу: ${term}`,
      });
    }
  };
  const featuredGames = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      price: "1,999₽",
      originalPrice: "2,999₽",
      discount: "-33%",
      rating: 4.5,
      image: "/img/a63db502-2f24-4970-8fcf-9d0dec435661.jpg",
      category: "Экшен",
    },
    {
      id: 2,
      title: "The Witcher 3",
      price: "899₽",
      originalPrice: "1,599₽",
      discount: "-44%",
      rating: 4.8,
      image: "/img/a63db502-2f24-4970-8fcf-9d0dec435661.jpg",
      category: "RPG",
    },
    {
      id: 3,
      title: "Elden Ring",
      price: "2,799₽",
      originalPrice: "3,499₽",
      discount: "-20%",
      rating: 4.9,
      image: "/img/a63db502-2f24-4970-8fcf-9d0dec435661.jpg",
      category: "Экшен RPG",
    },
    {
      id: 4,
      title: "God of War",
      price: "1,499₽",
      originalPrice: "2,299₽",
      discount: "-35%",
      rating: 4.7,
      image: "/img/a63db502-2f24-4970-8fcf-9d0dec435661.jpg",
      category: "Приключения",
    },
  ];

  const topSellers = [
    { name: "Counter-Strike 2", price: "Бесплатно", sales: "2.1M" },
    { name: "Dota 2", price: "Бесплатно", sales: "1.8M" },
    { name: "Apex Legends", price: "Бесплатно", sales: "1.5M" },
    { name: "PUBG", price: "999₽", sales: "1.2M" },
  ];

  return (
    <div className="min-h-screen bg-gaming-navy dark">
      {/* Header */}
      <header className="bg-gaming-gray border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gaming-orange">GameHub</h1>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-white hover:text-gaming-orange transition-colors"
                >
                  Магазин
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gaming-orange transition-colors"
                >
                  Библиотека
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gaming-orange transition-colors"
                >
                  Сообщество
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gaming-orange transition-colors"
                >
                  Поддержка
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Input
                  placeholder="Поиск игр..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-64 bg-gaming-navy border-gray-700 text-white placeholder-gray-400"
                />
                <Icon
                  name="Search"
                  className="absolute right-3 top-3 h-4 w-4 text-gray-400"
                />
              </div>

              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white"
                  >
                    <Icon name="User" className="h-4 w-4 mr-2" />
                    Войти
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gaming-gray border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-white">
                      Вход в аккаунт
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Войдите в свой аккаунт для покупки игр
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <Input
                      placeholder="Email"
                      className="bg-gaming-navy border-gray-700 text-white"
                    />
                    <Input
                      type="password"
                      placeholder="Пароль"
                      className="bg-gaming-navy border-gray-700 text-white"
                    />
                    <Button
                      className="w-full bg-gaming-orange hover:bg-orange-600"
                      onClick={() => {
                        toast({
                          title: "Вход выполнен",
                          description: "Добро пожаловать в GameHub!",
                        });
                        setIsLoginOpen(false);
                      }}
                    >
                      Войти
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                <SheetTrigger asChild>
                  <Button className="bg-gaming-orange hover:bg-orange-600 relative">
                    <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                    Корзина
                    {cartItems.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItems.length}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-gaming-gray border-gray-700 w-full sm:max-w-lg">
                  <SheetHeader>
                    <SheetTitle className="text-white">Корзина</SheetTitle>
                    <SheetDescription className="text-gray-400">
                      {cartItems.length === 0
                        ? "Корзина пуста"
                        : `${cartItems.length} товаров в корзине`}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    {cartItems.length === 0 ? (
                      <div className="text-center py-8">
                        <Icon
                          name="ShoppingCart"
                          className="h-12 w-12 text-gray-600 mx-auto mb-4"
                        />
                        <p className="text-gray-400">Корзина пуста</p>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-4 mb-6">
                          {cartItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center justify-between p-3 bg-gaming-navy rounded-lg"
                            >
                              <div className="flex items-center space-x-3">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-12 h-12 rounded object-cover"
                                />
                                <div>
                                  <p className="text-white font-medium text-sm">
                                    {item.title}
                                  </p>
                                  <p className="text-gaming-orange font-bold">
                                    {item.price}
                                  </p>
                                </div>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => removeFromCart(item.id)}
                                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                              >
                                <Icon name="Trash2" className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-gray-700 pt-4">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-white font-bold">Итого:</span>
                            <span className="text-gaming-orange font-bold text-xl">
                              {getTotalPrice().toLocaleString()}₽
                            </span>
                          </div>
                          <Button
                            className="w-full bg-gaming-orange hover:bg-orange-600"
                            onClick={() => {
                              toast({
                                title: "Покупка оформлена!",
                                description: `Заказ на сумму ${getTotalPrice().toLocaleString()}₽ оформлен. Ключи отправлены на email.`,
                              });
                              setCartItems([]);
                              setIsCartOpen(false);
                            }}
                          >
                            Оформить заказ
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-gaming-navy to-gaming-gray overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gaming-navy/90 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
              Лучшие игры
              <br />
              <span className="text-gaming-orange">по лучшим ценам</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              Тысячи игр, мгновенная доставка ключей, надежные продавцы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button
                size="lg"
                className="bg-gaming-orange hover:bg-orange-600 text-white"
                onClick={() => {
                  document
                    .getElementById("featured-games")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Icon name="Gamepad2" className="h-5 w-5 mr-2" />
                Смотреть каталог
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gaming-navy"
                onClick={() => {
                  toast({
                    title: "Как это работает",
                    description:
                      "1. Выберите игру 2. Добавьте в корзину 3. Оплатите 4. Получите ключ на email!",
                  });
                }}
              >
                <Icon name="Play" className="h-5 w-5 mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <img
            src="/img/dea0ee60-d0b3-4b1f-8a9a-4cbcd0350fb5.jpg"
            alt="Gaming Background"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Featured Games */}
      <section id="featured-games" className="py-16 bg-gaming-navy">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">
              Рекомендуемые игры
            </h3>
            <Button
              variant="outline"
              className="border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white"
              onClick={() => {
                toast({
                  title: "Каталог игр",
                  description: "Показываем весь каталог из 10,000+ игр",
                });
              }}
            >
              Смотреть все
              <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map((game) => (
              <Card
                key={game.id}
                className="bg-gaming-gray border-gray-700 overflow-hidden hover:border-gaming-orange transition-all duration-300 group animate-scale-in"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2 bg-gaming-orange text-white">
                    {game.discount}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="absolute top-2 right-2 bg-gaming-navy/80 text-white"
                  >
                    {game.category}
                  </Badge>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">
                    {game.title}
                  </CardTitle>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className={`h-4 w-4 ${i < Math.floor(game.rating) ? "text-gaming-orange fill-current" : "text-gray-600"}`}
                      />
                    ))}
                    <span className="text-gray-400 text-sm ml-2">
                      {game.rating}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center gap-2">
                    <span className="text-gaming-orange font-bold text-xl">
                      {game.price}
                    </span>
                    <span className="text-gray-500 line-through text-sm">
                      {game.originalPrice}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="pt-2">
                  <Button
                    className="w-full bg-gaming-orange hover:bg-orange-600"
                    onClick={() => addToCart(game)}
                  >
                    <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />В
                    корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Sellers */}
      <section className="py-16 bg-gaming-gray">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-8">Топ продаж</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topSellers.map((game, index) => (
              <Card
                key={index}
                className="bg-gaming-navy border-gray-700 hover:border-gaming-orange transition-colors"
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">{game.name}</p>
                      <p className="text-gaming-orange font-bold">
                        {game.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">Продаж</p>
                      <p className="text-white font-bold">{game.sales}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gaming-navy">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Почему выбирают нас?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-gaming-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Мгновенная доставка
              </h4>
              <p className="text-gray-400">
                Получайте ключи сразу после покупки на email
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="bg-gaming-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Гарантия качества
              </h4>
              <p className="text-gray-400">
                Все ключи проверены и работают на 100%
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="bg-gaming-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Лучшие цены</h4>
              <p className="text-gray-400">
                Сравниваем цены и находим лучшие предложения
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gaming-gray border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-gaming-orange font-bold text-lg mb-4">
                GameHub
              </h5>
              <p className="text-gray-400 mb-4">
                Лучший игровой маркетплейс для геймеров всего мира
              </p>
              <div className="flex space-x-4">
                <Icon
                  name="Facebook"
                  className="h-5 w-5 text-gray-400 hover:text-gaming-orange cursor-pointer"
                />
                <Icon
                  name="Twitter"
                  className="h-5 w-5 text-gray-400 hover:text-gaming-orange cursor-pointer"
                />
                <Icon
                  name="Instagram"
                  className="h-5 w-5 text-gray-400 hover:text-gaming-orange cursor-pointer"
                />
                <Icon
                  name="Youtube"
                  className="h-5 w-5 text-gray-400 hover:text-gaming-orange cursor-pointer"
                />
              </div>
            </div>

            <div>
              <h6 className="text-white font-semibold mb-4">Покупателям</h6>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Как купить
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Способы оплаты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Активация ключей
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Возврат средств
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-white font-semibold mb-4">Продавцам</h6>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Стать продавцом
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Комиссии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Правила
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-white font-semibold mb-4">Поддержка</h6>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Служба поддержки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gaming-orange">
                    Статус сервиса
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GameHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
