const streams=require("../node/streams");async function main(){let e="https://chrysalis-nodes.iota.org/",o=new streams.SendOptions(e,!0);const n=await(new streams.ClientBuilder).node(e).build();let s=B(81),t=streams.Author.fromClient(streams.StreamsClient.fromClient(n),s,streams.ChannelType.SingleBranch);console.log("channel address: ",t.channel_address()),console.log("multi branching: ",t.is_multi_branching()),console.log("IOTA client info:",await n.getInfo());let l=await t.clone().send_announce(),c=l.link;console.log("announced at: ",c.toString()),console.log("Announce message index: "+c.toMsgIndexHex());let a=await t.clone().get_client().get_link_details(c);console.log("Announce message id: "+a.get_metadata().message_id);let r=B(81),i=new streams.Subscriber(r,o.clone());await i.clone().receive_announcement(c.copy());let g=i.author_public_key();console.log("Channel registered by subscriber, author's public key: ",g);let u=i.fetch_state();console.log("Subscribing..."),l=await i.clone().send_subscribe(c.copy());let d=l.link;console.log("Subscription message at: ",d.toString()),console.log("Subscription message index: "+d.toMsgIndexHex()),await t.clone().receive_subscribe(d.copy()),console.log("Subscription processed"),console.log("Sending Keyload"),l=await t.clone().send_keyload_for_everyone(c.copy());let m=l.link;console.log("Keyload message at: ",m.toString()),console.log("Keyload message index: "+m.toMsgIndexHex()),console.log("Subscriber syncing..."),await i.clone().syncState();let b=T("Public"),h=T("Masked");console.log("Subscriber Sending tagged packet"),l=await i.clone().send_tagged_packet(m,b,h);let _=l.link;console.log("Tag packet at: ",_.toString()),console.log("Tag packet index: "+_.toMsgIndexHex());let p=_;console.log("Subscriber Sending multiple signed packets");for(var S=0;S<10;S++)l=await i.clone().send_signed_packet(p,b,h),p=l.link,console.log("Signed packet at: ",p.toString()),console.log("Signed packet index: "+p.toMsgIndexHex());console.log("\nAuthor fetching next messages");for(const F of await t.clone().fetchNextMsgs())console.log("Found a message..."),console.log("Public: ",q(F.message.get_public_payload()),"\tMasked: ",q(F.message.get_masked_payload()));console.log("\nSub sending unsubscribe message"),l=await i.clone().send_unsubscribe(d),await t.clone().receive_unsubscribe(l.link),console.log("Author received unsubscribe and processed it"),console.log("\nAuthor sending new keyload to all subscribers"),l=await t.clone().send_keyload_for_everyone(c.copy()),await i.clone().receive_keyload(l.link)?console.log("unsubscription unsuccessful"):console.log("unsubscription successful"),console.log("\nSubscriber resetting state"),i.clone().reset_state();let f=i.fetch_state();for(var k=!0,y=0;y<f.length;y++)u[y].link.toString()==f[y].link.toString()&&u[y].seqNo==f[y].seqNo&&u[y].branchNo==f[y].branchNo||(k=!1);k?console.log("States match"):console.log("States do not match"),console.log("\nAuthor fetching prev messages");let w=await t.clone().fetch_prev_msgs(p,3);for(var x=0;x<w.length;x++)console.log("Found a message at ",w[x].link.toString()),console.log("Found a message at index: "+w[x].link.toMsgIndexHex());console.log("\nExporting and importing state");let v="password",A=t.clone().export(v),C=new streams.StreamsClient(e,o.clone()),M=streams.Author.import(C,A,v);M.channel_address!==t.channel_address?console.log("import failed"):console.log("import succesfull"),M.announcementLink()!=c.toString()?console.log("recovered announcement does not match"):console.log("recovered announcement matches"),console.log("\nRecovering without state import"),(await streams.Author.recover(s,c.copy(),streams.ChannelType.SingleBranch,o.clone())).channel_address!==t.channel_address?console.log("recovery failed"):console.log("recovery succesfull");let I=B(81),H=new streams.Subscriber(I,o.clone());await H.clone().receive_announcement(c.copy());let N=H.get_public_key();function T(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n));return o}function q(e){for(var o="",n=0;n<e.length;++n)o+=String.fromCharCode(e[n]);return o}function B(e){const o="abcdefghijklmnopqrstuvwxyz";let n="";for(y=9;y<e;y++)n+=o[Math.floor(Math.random()*o.length)];return n}t.clone().store_new_subscriber(N),console.log("\nAuthor manually subscribed sub 2"),t.clone().remove_subscriber(N),console.log("Author manually unsubscribed sub 2")}streams.set_panic_hook(),main().then((()=>{console.log("Done example")})).catch((e=>{console.log(e)}));