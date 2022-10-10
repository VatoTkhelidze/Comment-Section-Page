import data from './data.json' assert{type: 'json'};


const new_comment = document.createElement('div');
const new_comment_textarea = document.createElement('textarea');
const new_comment_footer = document.createElement('div');
const new_comment_currentUser = document.createElement('img');
const new_comment_sendButton = document.createElement('button');
const wholePage = document.querySelector('.page');
let nothing;


new_comment_sendButton.addEventListener('click', function(){
    makeComment(false, false, wholePage);
});





















new_comment_currentUser.src = data.currentUser.image.png;
new_comment_sendButton.textContent = 'SEND';




// document.body.prepend(bodyMain);
// bodyMain.classList.add('bodyMain');


// bodyMain.append(main_comment);
// main_comment.classList.add('main_comment');


// bodyMain.append(main_comment);
// new_comment.classList.add('new_comment');


// bodyMain.append(new_comment);
// new_comment.classList.add('new_comment');






new_comment.append(new_comment_textarea);
new_comment_textarea.classList.add('new_comment_textarea');
new_comment_textarea.setAttribute('type', 'text');
new_comment_textarea.setAttribute('placeholder', 'Add a comment...');


new_comment.append(new_comment_footer);
new_comment_footer.classList.add('new_comment_footer');


new_comment_footer.append(new_comment_currentUser);
new_comment_currentUser.classList.add('author_img');


new_comment_footer.append(new_comment_sendButton);
new_comment_sendButton.classList.add('new_comment_blue');




for(let i = 0; i<data.comments.length; i++){
    const bodyMain = document.createElement('div');
    const main_comment = document.createElement('div');
    const comment = document.createElement('div');
    const comment_header = document.createElement('div');
    const comment_footer = document.createElement('div');
    const comment_date = document.createElement('span');
    const comment_text = document.createElement('span');
    const comment_likes = document.createElement('div');
    const reply_button = document.createElement('div');
    const authorImg = document.createElement('img');
    const user = document.createElement('span');
    const score = document.createElement('span');
    const plus = document.createElement('img');
    const minus = document.createElement('img');
    const reply_arrow = document.createElement('img');
    const reply_container = document.createElement('div');
    const reply_container_parent = document.createElement('div');
    let reply_textarea = document.createElement('textarea');
    const reply_footer = document.createElement('div');
    const userImg = document.createElement('img');
    const reply_blue = document.createElement('button');
    const reply_span = document.createElement('span');
    const wholePage = document.querySelector('.page');

    plus.addEventListener('click', function(){
        let renewableScore = +score.textContent;
        renewableScore++;
        score.textContent = renewableScore;
    });

    minus.addEventListener('click', function(){
        let renewableScore = +score.textContent;
        renewableScore--;
        score.textContent = renewableScore;
    });
    


    reply_span.classList.add('comment_text');
    user.textContent = data.comments[i].user.username;
    authorImg.src = data.comments[i].user.image.png;
    score.textContent = data.comments[i].score;
    plus.src = './images/icon-plus.svg';
    minus.src = './images/icon-minus.svg';
    reply_arrow.src = './images/icon-reply.svg';
    reply_textarea.setAttribute('type', 'text');
    reply_textarea.setAttribute('placeholder', 'Add a reply...');
    userImg.src = data.currentUser.image.png;
    reply_blue.textContent = 'REPLY';


    


    
    wholePage.append(bodyMain);
    bodyMain.classList.add('bodyMain');
    
    
    bodyMain.prepend(main_comment);
    main_comment.classList.add('main_comment');
    

    wholePage.insertAdjacentElement('afterend', new_comment);
    new_comment.classList.add('new_comment');







    



    for(let k = 0; k < data.comments[i].replies.length; k++){

        makeComment(true, data.comments[i].replies[k], reply_container_parent, data.currentUser.username);
    }

    
    

    

    reply_blue.addEventListener('click', function(){
        if(reply_textarea.value.length > 0){
            let newCommentDiv = document.createElement('div');
            const newCommentDiv_header = document.createElement('div');
            const newCommentDiv_currUser = document.createElement('span');
            const newCommentDiv_youContainer = document.createElement('div');
            const newCommentDiv_date = document.createElement('span');
            let newCommentDiv_text = document.createElement('p');
            const newCommentDiv_footer = document.createElement('div');
            const new_comment_currentUser = document.createElement('img');
            const newCommentDiv_likes = document.createElement('div');
            const newCommentDiv_plus = document.createElement('img');
            const newCommentDiv_minus = document.createElement('img');
            const newCommentDiv_score = document.createElement('span');
            const newCommentDiv_deleteEdit = document.createElement('div');
            const newCommentDiv_delete = document.createElement('div');
            const newCommentDiv_trash = document.createElement('img');
            const newCommentDiv_edit = document.createElement('div');
            const newCommentDiv_pencil = document.createElement('img');
            const newCommentDiv_update = document.createElement('button');
            let newCommentDiv_editable = document.createElement('textarea');
            
            
            

            new_comment_currentUser.src = data.currentUser.image.png;
            new_comment_currentUser.classList.add('author_img')
            newCommentDiv_currUser.textContent = data.currentUser.username;
            newCommentDiv_youContainer.textContent = 'you';
            newCommentDiv_date.textContent = 'now';
            newCommentDiv_text.innerHTML =`<span class="jigubigule">@${data.comments[i].user.username}</span> ${reply_textarea.value}`;
            reply_textarea.value = '';
            newCommentDiv_plus.src = './images/icon-plus.svg';
            newCommentDiv_trash.src = './images/icon-delete.svg'
            newCommentDiv_minus.src = './images/icon-minus.svg';
            newCommentDiv_pencil.src = './images/icon-edit.svg';
            newCommentDiv_score.textContent = '0';
            newCommentDiv_delete.textContent = 'Delete';
            newCommentDiv_edit.textContent = 'Edit';
            newCommentDiv_update.textContent = 'UPDATE';

            newCommentDiv_plus.addEventListener('click', function(){
                let renewableScore = +newCommentDiv_score.textContent;
                renewableScore++;
                newCommentDiv_score.textContent = renewableScore;
            });

            newCommentDiv_minus.addEventListener('click', function(){
                let renewableScore = +newCommentDiv_score.textContent;
                renewableScore--;
                newCommentDiv_score.textContent = renewableScore;
            });

            newCommentDiv.classList.add('newCommentDiv');
            reply_container_parent.append(newCommentDiv);
            
            newCommentDiv.append(newCommentDiv_header);
            newCommentDiv_header.classList.add('comment_header');
            
            newCommentDiv_header.append(new_comment_currentUser);

            newCommentDiv_header.append(newCommentDiv_currUser);
            newCommentDiv_currUser.classList.add('author_username');

            newCommentDiv_header.append(newCommentDiv_youContainer);
            newCommentDiv_youContainer.classList.add('you_container');

            newCommentDiv_header.append(newCommentDiv_date);
            newCommentDiv_date.classList.add('comment_date');

            newCommentDiv.append(newCommentDiv_text);
            newCommentDiv_text.classList.add('comment_text');

            newCommentDiv.append(newCommentDiv_footer);
            newCommentDiv_footer.classList.add('comment_footer');

            newCommentDiv_footer.append(newCommentDiv_likes);
            newCommentDiv_likes.classList.add('comment_likes');

            newCommentDiv_likes.append(newCommentDiv_score);
            newCommentDiv_score.classList.add('score');

            newCommentDiv_likes.prepend(newCommentDiv_plus);

            newCommentDiv_likes.append(newCommentDiv_minus);

            newCommentDiv_footer.append(newCommentDiv_deleteEdit);
            newCommentDiv_deleteEdit.classList.add('replyOne_deleteEdit');

            newCommentDiv_deleteEdit.append(newCommentDiv_delete);
            newCommentDiv_delete.classList.add('replyOne_delete');

            newCommentDiv_delete.prepend(newCommentDiv_trash);

            newCommentDiv_deleteEdit.append(newCommentDiv_edit);
            newCommentDiv_edit.classList.add('replyOne_edit');

            newCommentDiv_edit.prepend(newCommentDiv_pencil);

            

            newCommentDiv_edit.addEventListener('click', function(){
                newCommentDiv_editable.value = newCommentDiv_text.textContent;
                newCommentDiv_editable.classList.add('newCommentDiv_editable_textarea');
                newCommentDiv_deleteEdit.style.display = 'none';
                newCommentDiv_footer.append(newCommentDiv_update);
                newCommentDiv_update.style.display = 'block';
                newCommentDiv_update.classList.add('newCommentDiv_update');
                newCommentDiv_text.replaceWith(newCommentDiv_editable);
            });

            newCommentDiv_update.addEventListener('click', function(){
                newCommentDiv_text.innerHTML = `<span class="jigubigule">@${data.comments[i].user.username}</span> ${newCommentDiv_editable.value.replace(`@${data.comments[i].user.username}`, '')}`;
                newCommentDiv_editable.replaceWith(newCommentDiv_text);
                newCommentDiv_update.style.display = 'none';
                newCommentDiv_deleteEdit.style.display = 'flex';
            });

            newCommentDiv_delete.addEventListener('click', function(){
                const deleteWindow = document.querySelector('.deleteWindow');
                const deleteContainer = document.querySelector('.deleteContainer');
                deleteWindow.style.display = 'flex';
                deleteContainer.style.display = 'flex';
            });






            reply_container.style.display = 'none';
            reply_textarea.style.borderColor = '';
        }else{
            reply_textarea.style.border = '2px solid red';
        }
    })
    

    main_comment.append(reply_container_parent);
    reply_container_parent.classList.add('reply_container_parent');


    main_comment.insertAdjacentElement('afterbegin', reply_container);
    reply_container.classList.add('reply_container');


    reply_container.append(reply_textarea);
    reply_textarea.classList.add('reply_textarea');


    reply_container.append(reply_footer);
    reply_footer.classList.add('reply_footer');


    reply_footer.append(userImg);
    userImg.classList.add('author_img');


    reply_footer.append(reply_blue);
    reply_blue.classList.add('reply_blue');
    
    
    main_comment.insertAdjacentElement('afterbegin', comment);
    comment.classList.add('comment');
    
    
    comment.insertAdjacentElement('afterbegin', comment_header);
    comment_header.classList.add('comment_header');
    

    comment_header.append(authorImg);
    authorImg.classList.add('author_img');


    comment_header.append(user);
    user.classList.add('author_username');


    comment_header.append(comment_date);
    comment_date.classList.add('comment_date');
    comment_date.textContent = data.comments[i].createdAt;
    
    
    comment.insertAdjacentElement('beforeend', comment_text);
    comment_text.classList.add('comment_text');
    comment_text.textContent = data.comments[i].content;
    
    
    comment.insertAdjacentElement('beforeend', comment_footer);
    comment_footer.classList.add('comment_footer');
    
    
    comment_footer.insertAdjacentElement('beforeend', comment_likes);
    comment_likes.classList.add('comment_likes');

    comment_likes.append(score);
    score.classList.add('score');


    comment_likes.prepend(plus);


    comment_likes.append(minus);


    
    
    comment_footer.insertAdjacentElement('beforeend', reply_button);
    reply_button.classList.add('reply_button');
    reply_button.textContent = 'Reply';

    reply_button.prepend(reply_arrow);
    reply_arrow.classList.add('reply_arrow');

    



    

    reply_button.addEventListener('click', function(){
        reply_container.style.display = 'block';
    });
    
    

}
   











function makeComment(fromJson, jsonComment, parentContainer, jsonCurrentUser){
    


    const replyingTo = document.createElement('span');
    const reply_container_child = document.createElement('div');
    const replyOne_username = document.createElement('span');
    const replyOne_currentuser_name = document.createElement('span');
    const replyOne_header = document.createElement('div');
    const replyOne_footer = document.createElement('div');
    const replyOne_date = document.createElement('span');
    const replyOne_text = document.createElement('span');
    const replyOne_author = document.createElement('img');
    const replyOne_likes = document.createElement('div');
    const replyOne_button = document.createElement('div');
    const replyOne_arrow = document.createElement('img');
    const replyOne_delete = document.createElement('div');
    const replyOne_trash = document.createElement('img');
    const replyOne_edit = document.createElement('div');
    const replyOne_pencil = document.createElement('img');
    const replyOne_container = document.createElement('div');
    const replyOne_textarea = document.createElement('textarea');
    const plus = document.createElement('img');
    const minus = document.createElement('img');
    const score = document.createElement('span');
    const you_container = document.createElement('div');
    const replyOne_deleteEdit = document.createElement('div');
    const replysReply_footer = document.createElement('div');
    const replysReply_author = document.createElement('img');
    const replysReply_blue = document.createElement('div');
    replyOne_textarea.setAttribute('placeholder', 'Add a reply...');




    if(fromJson){
        const replyOne = jsonComment;
        replyOne_author.src = replyOne.user.image.png;
        replyOne_username.textContent = replyOne.user.username;
        replyOne_date.textContent = replyOne.createdAt;
        score.textContent = replyOne.score;
        replyOne_text.innerHTML =`<span class="replyingTo">@${jsonComment.replyingTo}</span> ${replyOne.content}`;
        replyingTo.textContent = jsonComment.replyingTo;
        replyingTo.classList.add('replyingTo');
        replysReply_author.src = data.currentUser.image.png;
        replysReply_blue.textContent = 'REPLY'
    } else {
        const textArea = document.querySelector('.new_comment_textarea');
        console.log(textArea.value);
        replyOne_author.src = data.currentUser.image.png;
        replyOne_username.textContent = data.currentUser.username;
        replyOne_date.textContent = "Now";
        score.textContent = '0';
        replyOne_text.innerHTML = textArea.value;
        textArea.value = "";
    }




    
    replyOne_trash.src = './images/icon-delete.svg';
    replyOne_pencil.src = './images/icon-edit.svg';
    replyOne_currentuser_name.textContent = data.currentUser.username;
    replyOne_button.textContent = 'Reply'
    replyOne_arrow.src = './images/icon-reply.svg';
    plus.src = './images/icon-plus.svg';
    minus.src = './images/icon-minus.svg';
    you_container.textContent = 'you';
    replyOne_delete.textContent = 'Delete';
    replyOne_edit.textContent = 'Edit';


    
    

    parentContainer.append(reply_container_child);
    reply_container_child.classList.add('reply_container_child');
    


    reply_container_child.append(replyOne_header);
    replyOne_header.classList.add('comment_header');


    replyOne_header.append(replyOne_author);
    replyOne_author.classList.add('author_img');


    replyOne_header.append(replyOne_username);
    replyOne_username.classList.add('author_username');

    if(replyOne_username.textContent === data.currentUser.username){
        replyOne_header.append(you_container);
        you_container.classList.add('you_container');

    }
    
    


    replyOne_header.append(replyOne_date);
    replyOne_date.classList.add('comment_date');



    reply_container_child.append(replyOne_text);
    replyOne_text.classList.add('comment_text');
    

    reply_container_child.append(replyOne_footer);
    replyOne_footer.classList.add('replyOne_footer');



    replyOne_footer.append(replyOne_likes);
    replyOne_likes.classList.add('comment_likes');



    replyOne_likes.append(plus);
    replyOne_likes.append(score);
    score.classList.add('score');
    replyOne_likes.append(minus);


    if(replyOne_username.textContent === data.currentUser.username){
        replyOne_footer.append(replyOne_deleteEdit);
        replyOne_deleteEdit.append(replyOne_delete)
        replyOne_deleteEdit.classList.add('replyOne_deleteEdit')
        replyOne_delete.classList.add('replyOne_delete');
        replyOne_delete.insertAdjacentElement('afterbegin', replyOne_trash);
        replyOne_deleteEdit.append(replyOne_edit);
        replyOne_edit.insertAdjacentElement('afterbegin', replyOne_pencil);
        replyOne_edit.classList.add('replyOne_edit');
    
        
    }else{
        replyOne_footer.append(replyOne_button);
        replyOne_button.classList.add('reply_button');
    };
    

    
    replyOne_button.append(replyOne_arrow);  

    replyOne_button.addEventListener('click', function(){
        parentContainer.append(replyOne_container);
        replyOne_container.classList.add('replyOne_container');
        replyOne_container.style.display = 'flex';
        replyOne_container.append(replyOne_textarea);
        replyOne_textarea.classList.add('reply_textarea');
        replyOne_container.append(replysReply_footer);
        replysReply_footer.classList.add('reply_footer');
        replysReply_footer.append(replysReply_author);
        replysReply_author.classList.add('author_img');
        replysReply_footer.append(replysReply_blue);
        replysReply_blue.classList.add('replysReply_blue');

    });

    replyOne_delete.addEventListener('click', () => {
        const deleteWindow = document.querySelector('.deleteWindow');
        const deleteContainer = document.querySelector('.deleteContainer');
        deleteWindow.style.display = 'flex';
        deleteContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        
        
    })


    const yesDelete = document.querySelector('.yesDelete');
    yesDelete.addEventListener('click', (event)=>{
        const deleteWindow = document.querySelector('.deleteWindow');
        const deleteContainer = document.querySelector('.deleteContainer');
        const deleteMainDiv = document.querySelector ('.newCommentDiv');
        deleteMainDiv.remove();
        const deleteMainDiv1 = document.querySelector('.reply_container_child');
        deleteMainDiv1.remove();
        deleteWindow.style.display = 'none';
        deleteContainer.style.display = 'none';
        document.body.style.overflow = 'visible';
    })

    replysReply_blue.addEventListener('click', ()=>{
        const ramsesmiron_container = document.createElement('div');
        const ramsesmiron_header = document.createElement('div');
        const ramsesmiron_author = document.createElement('img');
        const ramsesmiron_username = document.createElement('span')
        const ramsesmiron_youContainer = document.createElement('div');
        const ramsesmiron_commentDate = document.createElement('span');
        const ramsesmiron_commentText = document.createElement('p');
        const ramsesmiron_footer = document.createElement('div');
        const ramsesmiron_replyingTo = document.createElement('p');
        const ramsesmiron_likes = document.createElement('div');
        const ramsesmiron_plus = document.createElement('img');
        const ramsesmiron_score = document.createElement('span');
        const ramsesmiron_minus = document.createElement('img');
        const ramsesmiron_delete_edit = document.createElement('div');
        const ramsesmiron_delete = document.createElement('div');
        const ramsesmiron_deleteText = document.createElement('span');
        const ramsesmiron_trash = document.createElement('img');
        const ramsesmiron_edit = document.createElement('div');
        const ramsesmiron_editText = document.createElement('span');
        const ramsesmiron_pencil = document.createElement('img');

        

        ramsesmiron_replyingTo.textContent = 'ramsesmiron';
        ramsesmiron_author.src = data.currentUser.image.png;
        ramsesmiron_username.textContent = jsonCurrentUser;
        ramsesmiron_youContainer.textContent = 'you';
        ramsesmiron_commentDate.textContent = 'now';
        ramsesmiron_commentText.innerHTML =`<span class="jigubigule">@${ramsesmiron_replyingTo.textContent}</span> ${replyOne_textarea.value}`;
        replyOne_container.style.display = 'none';
        replyingTo.textContent = '@ramsesmiron ';
        replyingTo.classList.add('replyingTo');
        ramsesmiron_plus.src = './images/icon-plus.svg';
        ramsesmiron_minus.src = './images/icon-minus.svg';
        ramsesmiron_score.textContent = '0';
        ramsesmiron_deleteText.textContent = 'Delete';
        ramsesmiron_trash.src = './images/icon-delete.svg';
        ramsesmiron_editText.textContent = 'Edit';
        ramsesmiron_pencil.src = './images/icon-edit.svg';


        



        parentContainer.append(ramsesmiron_container);
        ramsesmiron_container.classList.add('reply_container_child');


        ramsesmiron_container.append(ramsesmiron_header);
        ramsesmiron_header.classList.add('comment_header');


        ramsesmiron_header.append(ramsesmiron_author);
        ramsesmiron_author.classList.add('author_img');


        ramsesmiron_header.append(ramsesmiron_username);
        ramsesmiron_username.classList.add('author_username');


        ramsesmiron_header.append(ramsesmiron_youContainer);
        ramsesmiron_youContainer.classList.add('you_container');


        ramsesmiron_header.append(ramsesmiron_commentDate);
        ramsesmiron_commentDate.classList.add('comment_date');


        ramsesmiron_container.append(ramsesmiron_commentText);
        ramsesmiron_commentText.classList.add('comment_text');


        ramsesmiron_container.append(ramsesmiron_footer);
        ramsesmiron_footer.classList.add('comment_footer');

        
        ramsesmiron_footer.append(ramsesmiron_likes);
        ramsesmiron_likes.classList.add('comment_likes');


        ramsesmiron_likes.append(ramsesmiron_plus);


        ramsesmiron_likes.append(ramsesmiron_score);
        ramsesmiron_score.classList.add('score');


        ramsesmiron_likes.append(ramsesmiron_minus);


        ramsesmiron_footer.append(ramsesmiron_delete_edit);
        ramsesmiron_delete_edit.classList.add('replyOne_deleteEdit');


        ramsesmiron_delete_edit.append(ramsesmiron_delete);
        ramsesmiron_delete.classList.add('replyOne_delete');


        ramsesmiron_delete_edit.append(ramsesmiron_edit);
        ramsesmiron_edit.classList.add('replyOne_edit');


        ramsesmiron_delete.append(ramsesmiron_trash);


        ramsesmiron_delete.append(ramsesmiron_deleteText);


        ramsesmiron_edit.append(ramsesmiron_pencil);


        ramsesmiron_edit.append(ramsesmiron_editText);
    });
}





