function AlertFunction(apparatus)
{
  var details;
  var event;

  var FL = [
     '\n In gymnastics, the floor refers to a specially prepared exercise surface,',
      'which is considered an apparatus. It is used by both male and female gymnasts.',
      'The event in gymnastics performed on floor is called floor exercise. ',
      'The English abbreviation for the event in gymnastics scoring is FX.',
     '\n\n A spring floor is used in all of gymnastics to provide more bounce, ',
     'and also help prevent potential injuries to lower extremity joints of ',
     'gymnasts due to the nature of the apparatus, which includes the repeated ',
     'pounding required to train it. '
  ].join('');

  var PB = [
   '\nThe apparatus consists of two parallel bars that are held parallel to,',
   ' and elevated above, the floor by a metal supporting framework.',
   ' The bars are composed of wood or other material, with an outer coating of wood.',
   '[2] The vertical members of the supporting framework are adjustable',
   ' so the height of the bars above the floor and distance between the bars can be',
   '\n\n set optimally for each gymnast.',
   'Bar length: 350 centimetres (11.5 ft) ± 1 centimetre (0.39 in)',
   'Bar rounded profile: 5 centimetres (2.0 in) ± 1 millimetre (0.039 in) vertical by 4',
   ' centimetres (1.6 in) ± 1 millimetre (0.039 in) horizontal .'
  ].join('');

  var SR = [
   '\nThe rings, also known as steady rings or still rings[1] (in contrast to flying rings),',
   ' is an artistic gymnastics apparatus and the event that uses it.',
   ' It is traditionally used only by male gymnasts, due to its extreme upper body strength',
   ' requirements. Gymnasts typically wear ring grips while performing on the rings.',
   '\n\nThe apparatus consists of two rings that hang freely from a rigid metal frame.',
   ' Each ring is supported by a strap, which in turn connects to a steel cable that',
   ' is suspended from the metal frame. The gymnast, who grips one ring with each hand,',
   ' must control the movement of the rings and his or her body movements at all times.'
].join('');

var HB = [
   '\nThe horizontal bar, also known as the high bar,',
   ' is an apparatus used by male gymnasts in artistic gymnastics.',
   ' It traditionally consists of a cylindrical metal (typically steel) bar that is',
   ' rigidly held above and parallel to the floor by a system of cables and stiff vertical',
   ' supports. Gymnasts typically wear suede leather grips while performing on the bar.',
   ' Current elite-level competition uses a more elastic fiberglass core rail similar in',
   ' material to the rails used in the womens uneven bars and mens parallel bars apparatus.',
   'The gymnastics elements performed on the horizontal bar are regulated by a Code of Points.',
   '\n\n A bar routine, which is a sequence of several bar skills, usually includes giants with',
   ' various grips (overgrip, undergrip, dorsal grip, mixed grip), in-bar work, turns,',
   ' release and regrasp skills, and a dismount. The horizontal bar is often considered one',
   ' of the most exciting gymnastics events due to the power exhibited by gymnasts during',
   ' giant swings and spectacular aerial releases and dismounts that often include multiple',
   ' flips or twists and, in some cases, airborne travel over the bar.'
].join('');

var PH = [
   'The pommel horse is an artistic gymnastics apparatus.',
   ' Traditionally, it is used by only male gymnasts.',
   ' \n\nOriginally made of a metal frame with a wooden body and a leather cover,',
   ' the modern pommel horse has a metal body covered with foam rubber and leather,',
   ' with plastic handles (or pommels).'  
].join('');

var VT = [
   'The vault is an artistic gymnastics apparatus which gymnasts perform on,',
   ' as well as the skill performed using that apparatus.',
   ' Vaulting is also the action of performing a vault.',
   ' Both male and female gymnasts perform the vault.',
   ' The English abbreviation for the event in gymnastics scoring is VT.',
   'Early forms of the vault were invented by German Friedrich Ludwig Jahn.',
   ' The apparatus itself originated as a "horse",',
   ' much like the pommel horse but without the handles it was sometimes',
   ' known as the vaulting horse. The horse was set up with its long dimension',
   '\n\nperpendicular to the run for women, and parallel for men.',
   ' The vaulting horse was the apparatus used in the Olympics for over a century,',
   ' beginning with the Mens vault in the first modern Olympics and ending with the ',
   'Gymnastics at the 2000 Summer Olympics.',
 'The horse has been blamed for several serious accidents over the years.',
 ' In 1988, American Julissa Gomez was paralyzed in a vaulting accident she died from',
 ' complications from her injuries three years later. During warmups at the 1998 Goodwill',
 ' Games, Chinese gymnast Sang Lan fell and suffered paralysis from a cervical-spine injury.',
 ' In a series of crashes when the horses height was set too low at the 2000 Olympics,',
 ' gymnasts either rammed into the horses front end, or had bad landings after having',
 ' problems with their hand placements during push-off.',
   '\n\nFollowing the accident in 1988 and compounded by the ones in 1998 and 2000,',
   ' International Gymnastics Federation (FIG) re-evaluated and changed the apparatus,',
   ' citing both safety reasons and the desire to facilitate more impressive acrobatics.',
   ' The 2001 World Artistic Gymnastics Championships were the first international',
   ' competition to make use of the "vaulting table", an apparatus made by Dutch',
   ' gymnastics equipment company Janssen-Fritsen since the mid-1990s. It features a flat,',
   ' larger, and more cushioned surface almost parallel to the floor, which slopes downward',
   ' at the end closest to the springboard; gymnasts nicknamed it the "tongue" it appears',
   ' to be somewhat safer than the old apparatus.',
   'In 2007, Dutch junior gymnast Imke Glas was seriously injured after a fall on a vault.',
].join('');
 
 if (apparatus == 'FL')
    {
       event = 'Floor'
      details = FL;
    }
 else if (apparatus == 'PB')
    {
       event = 'Parallel Bars '
     details = PB;
    }
 else if (apparatus == 'SR')
    {
       event = 'Still Rings'
    details = SR;
    }
 else if (apparatus == 'HB')
    {
       event = 'High Bar'
    details = HB;
    }
 else if (apparatus == 'PH')
{
   event = 'Pommel Hores'
 details = PH;
}
else if (apparatus == 'VT') 
{
   event = 'Vault'
   details = VT;
}
 else 
   {
      details = 'NO INFO'
   }

  alert('You selected ' + event + '\n ' + details)
}