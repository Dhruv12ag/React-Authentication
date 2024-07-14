#include <iostream>
#include <cstdlib>
#include <ctime>
#include<windows.h>  
#ifdef _WIN32
#include <conio.h>
#else
#include <unistd.h>
#include <termios.h>
#include <sys/select.h>
#endif

using namespace std;

const int width = 20;   // Width of the game board
const int height = 20;  // Height of the game board

class Snake {
private:
    int headX, headY;       // Head position of the snake
    int tailX[100], tailY[100];  // Tail positions of the snake
    int nTail;              // Length of the snake
    enum Direction { STOP = 0, LEFT, RIGHT, UP, DOWN };
    Direction dir;          // Current direction of the snake
    bool gameOver;          // Flag to check if game is over
    int fruitX, fruitY;     // Fruit position

public:
    Snake() {
        gameOver = false;
        dir = STOP;
        headX = width / 2;
        headY = height / 2;
        fruitX = rand() % width;
        fruitY = rand() % height;
        nTail = 0;
    }

    void Draw() {
        system("cls");  // Clear the console screen
        for (int i = 0; i < width + 2; i++)
            cout << "#";
        cout << endl;

        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                if (j == 0)
                    cout << "#";
                if (i == headY && j == headX)
                    cout << "O";  // Head of the snake
                else if (i == fruitY && j == fruitX)
                    cout << "F";  // Fruit
                else {
                    bool printTail = false;
                    for (int k = 0; k < nTail; k++) {
                        if (tailX[k] == j && tailY[k] == i) {
                            cout << "o";  // Tail of the snake
                            printTail = true;
                        }
                    }
                    if (!printTail)
                        cout << " ";
                }
                if (j == width - 1)
                    cout << "#";
            }
            cout << endl;
        }

        for (int i = 0; i < width + 2; i++)
            cout << "#";
        cout << endl;
    }

    void Input() {
        char input;
#ifdef _WIN32
        if (_kbhit()) {
            input = _getch();
#else
        fd_set set;
        struct timeval timeout;
        FD_ZERO(&set);
        FD_SET(STDIN_FILENO, &set);  // Listen to stdin for input
        timeout.tv_sec = 0;
        timeout.tv_usec = 0;
        if (select(STDIN_FILENO + 1, &set, NULL, NULL, &timeout) > 0) {
            input = getchar();
#endif
            switch (input) {
            case 'a':
                dir = LEFT;
                break;
            case 'd':
                dir = RIGHT;
                break;
            case 'w':
                dir = UP;
                break;
            case 's':
                dir = DOWN;
                break;
            case 'x':
                gameOver = true;
                break;
            }
        }
    }

    void Logic() {
        int prevX = tailX[0];
        int prevY = tailY[0];
        int prev2X, prev2Y;
        tailX[0] = headX;
        tailY[0] = headY;
        for (int i = 1; i < nTail; i++) {
            prev2X = tailX[i];
            prev2Y = tailY[i];
            tailX[i] = prevX;
            tailY[i] = prevY;
            prevX = prev2X;
            prevY = prev2Y;
        }

        switch (dir) {
        case LEFT:
            headX--;
            break;
        case RIGHT:
            headX++;
            break;
        case UP:
            headY--;
            break;
        case DOWN:
            headY++;
            break;
        default:
            break;
        }

        // Check if snake goes out of bounds
        if (headX >= width) headX = 0; else if (headX < 0) headX = width - 1;
        if (headY >= height) headY = 0; else if (headY < 0) headY = height - 1;

        // Check if snake eats fruit
        if (headX == fruitX && headY == fruitY) {
            nTail++;
            fruitX = rand() % width;
            fruitY = rand() % height;
        }

        // Check if snake collides with itself
        for (int i = 0; i < nTail; i++) {
            if (tailX[i] == headX && tailY[i] == headY)
                gameOver = true;
        }
    }

    bool GameOver() {
        return gameOver;
    }
};

int main() {
    srand(static_cast<unsigned int>(time(nullptr)));  // Seed for random number generation
    Snake snakeGame;

    while (!snakeGame.GameOver()) {
        snakeGame.Draw();
        snakeGame.Input();
        snakeGame.Logic();
#ifdef _WIN32
        Sleep(100);  // Adjust speed of the game on Windows
#else
        usleep(100000);  // Adjust speed of the game on Unix/Linux
#endif
    }

    cout << "Game Over!" << endl;
    return 0;
}
