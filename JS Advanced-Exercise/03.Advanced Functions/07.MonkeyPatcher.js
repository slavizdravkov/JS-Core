function solve(command) {
    switch (command) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            let upVote = this.upvotes;
            let downVote = this.downvotes;
            let rating = 'new';

            if (upVote + downVote >= 10) {
                if (upVote > 0.66 * (upVote + downVote)) {
                    rating = 'hot';
                } else if (upVote < downVote) {
                    rating = 'unpopular';
                } else if (upVote > 100 || downVote > 100) {
                    rating = 'controversial';
                }
            }

            if (upVote + downVote > 50) {
                let modifier = Math.ceil(0.25 * Math.max(upVote, downVote));
                upVote += modifier;
                downVote += modifier;
            }
            let score = upVote - downVote;
            return [upVote, downVote, score, rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
