# Wstęp

Ten dokument ma na celu wprowadzenie Ciebie do naszego zespołu. Cenimy sobie bezpieczeństwo danych naszych klientów dlatego wypracowacowaliśmy szereg praktyk, które przejdziesz teraz krok po kroku. Wszystkie informacje związane z firmą **muszą** znajdować się w maszynie wirtualnej. Istnieje kilka wyjątków, o których przeczytasz w dalszej części tego dokumentu.


# Aplikacja monitorująca czas

### Logowanie do poczty

Pierwszym krokiem jaki wykonasz jest zalogowanie się na Twoj nowy adres email w domenie reef.pl.

### **Uwaga!**

Pierwsze logowanie wykonujesz z poziomu komputera hosta, ponieważ jest to konieczne, aby zainstalować aplikację monitorującą czas. Kolejne logowania będziesz wykonywać z poziomu maszyny wirtualnej.

### Aplikacja monitorująca czas

Cenimy sobie transparentność, dlatego efekty naszej pracy mierzymy czas za pomocą oprogramowania, które jednocześnie wykonuje regularne zrzuty ekranowe. Jego instalacja jest pierwszym krokiem w przygotowaniu swojego środowiska do pracy.

Zainstaluj ją, a następnie zaakceptuj zaproszenie otrzymane na swój adres e-mail.

Aplikację można popbrać tutaj: [WebWork Tracker](https://www.webwork-tracker.com/#section-download)



# Konfiguracja środowiska

## 1. Utworzenie szyfrowanej partycji (host)

Z uwagi na różnorodność systemów operacyjnych używanych przez nasz zespół nie narzucamy konkretnego rozwiązania. To od Ciebie zależy jakiego oprogramowania użyjesz. Dla systemów Linux może to być np. LUKS.

Z uwagi na dość duże wykorzystanie przestrzeni przez nasze projekty - minimalny rozmiar partycji to **50 GB** (zalecane **100 GB**).

W przypadku, gdy nie posiadasz preferencji zalecamy użycie [VeraCrypt](https://www.veracrypt.fr/en/Home.html). Instrukcja wyjaśniająca krok po kroku proces instalacji znajduje się [tutaj](docs/VeraCrypt.html).


## 2. Maszyna wirtualna (host)

Podobnie jak w przypadku oprogramowania do szyfrowania danych nie mamy konkretnych wymagań jakiego rozwiązania użyjesz. Jedynym warunkiem jest licencja. Zalecany przez nas jest [VirtualBox](https://www.virtualbox.org/).

W celu zachowania spójności wersji oprogramowania pomiędzy wszystimi maszynami wirtualnymi stosujemy dystrybucję [Linux Mint](https://www.linuxmint.com/download.php). Chcielibyśmy żebyś też pracował na tym systemie. Pomoże to nam zaoszczędzić czas w przyszłości.

Instrukcję opisującą krok po kroku proces tworzenia maszyny wirtualnej znajdziesz [tutaj](docs/VirtualBox.html).

## 3. Instalacja niezbędnych pakietów (vm)

Do pracy przydadzą się Tobie następujące pakiety:

```bash
$ sudo apt install \
	docker.io \
	docker-compose \
	git \
	python3-pip \
	python3-setuptools \
	python3-virtualenv \
	virtualenvwrapper
```

## 4. Podstawowa konfiguracja (bash, git, ssh)

### SSH
Na początek wygeneruj sobie klucz SSH. Postępuj zgodnie z instrukcjami polecenia:

```bash
$ ssh-keygen
```

### Git

Skopiuj plik `.gitconfig` załączony w tym repozytorium do swojego katalogu domowego:

```bash
$ cp .gitconfig ~/
```

Uzupełnij nazwę użytkownika oraz e-mail:

```bash
$ git config --global user.name "Imię Nazwisko"
$ git config --global user.email imie.nazwisko@reef.pl
```

### Bash

Skopuj plik .bashrc do swojego katalogu domowego

```bash
$ cp .bashrc ~/
```

### Docker

Dodatnie aktualnie zalogowanego użytkownika do grupy:

```bash
$ sudo gpasswd -a $USER docker
```

*Uwaga: Dla ułatwienia w pliku .bashrc dodany został alias **dc** dla docker-compose. Zamiast wpisywania pełnej nazwy możesz użyć skróconej wersji.*

Przykład: 

```bash
$ dc up
```


# 5. Konfiguracja konta Google oraz GitHub

Od momentu posiadania poprawnie skonfigurowanej maszyny wirtualnej wszelkie logowania na konta firmowe odbywają się za jej pośrednictwem.

## Włączenie autoryzacji dwuetapowej dla konta Google

W celu poprawienia bezpieczeństwa naszych kont wymagamy, aby włączyć weryfikację dwuetapową.

[Konfiguracja autoryzacji dwuetapowej Google](https://myaccount.google.com/signinoptions/two-step-verification)

## Utworzenie konta na GitHub

Na potrzeby pracy utwórz nowe konto na GitHub. Sugerowana nazwa użytkownika to pierwsza litera imienia nazwisko oraz suffix `-reef`, np. `jkowalski-reef`.

Tutaj również należy włączyć aktoryzację dwuetapową.

[Konfiguracja autoryzacji dwuetapowej GitHub](https://github.com/settings/two_factor_authentication/configure)



# 6. Komunikatory

Do komunikacji w firmie używamy Slack'a oraz Skype. Możesz też używać ich w przeglądarce, jednak dla wygody zalcane jest zainstalowane ich na **komputerze hosta**. 

### Slack

Na swojej firmowej poczcie czeka na Ciebie wiadomosć z zaproszeniem do zespołu reeftechnologies.slack.com.

**@todo: opis poszczególnych kanałów**

Nie zapomnij przywitać się z nami. :)


### Skype

W przypadku Skype możesz użyć swojego prywatnego konta. Jeśli nie chcesz tego robić utwórz nowe konto w formacie identycznym jak dla konta GitHub (tj. pierwsza litera imienia nazwisko oraz suffix `-reef`, np. `jkowalski-reef`).

# Gratulacje

Wykonałeś wszystkie czynności niezbędne do  rozpoczęcia pracy. Powodzenia!