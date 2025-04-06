
# TodoList

Create Delete and update your tasks!

## API Reference

#### Get all tasks

```http
  GET /tasks
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | generated id |
| `name` | `string` | task name |
| `date` | `string` | task date yyyy-mm-dd |

#### Get task

```http
  GET  /tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Create task

```http
  POST  /tasks
```
body
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | task name |
| `date` | `string` | task date yyyy-mm-dd |

#### Delete task

```http
  DELETE /tasks/${id}
```

#### Update task

```http
  PUT /tasks/${id}
```
body
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | generated id |
| `name` | `string` | task name |
| `date` | `string` | task date yyyy-mm-dd |




## Installation




```bash

    git clone git@github.com:4elov3k/lad24.git
    cd <directroy name>
    docker-compose up -d

```

Then inside api container use

```bash
    npm run migrate

```