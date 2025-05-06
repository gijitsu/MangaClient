import 'package:flutter/material.dart';
import 'dart:math';
import '../MangaSummary.dart';
import '../ReviewSpecPage.dart';

class MangaPreview extends StatefulWidget {
  MangaPreview({
    super.key,
    required this.title,
    required this.totalNumberOfCharacters,
    required this.numberOfCharactersPerLine,
    required this.boxHeight,
    required this.boxWidth,
    required this.coverHeight,
    required this.coverWidth,
    required this.id,
    required this.coverfilename,
    required this.tags,
    required this.description,
    required this.userData,
    required this.types,
  });

  String title;
  int totalNumberOfCharacters;
  int numberOfCharactersPerLine;
  double boxHeight;
  double boxWidth;
  double coverHeight;
  double coverWidth;
  String id;
  String coverfilename;
  String tags;
  String description;
  String types;
  dynamic userData;

  @override
  State<MangaPreview> createState() => _MangaPreviewState();
}

class _MangaPreviewState extends State<MangaPreview> {
  @override
  Widget build(BuildContext context) {
    int sz = widget.title.length;
    String lessenedTitle =
        widget.title.substring(0, min(widget.totalNumberOfCharacters, sz));
    var actualTitle = '';
    for (int i = 0;
        i < lessenedTitle.length;
        i += widget.numberOfCharactersPerLine) {
      actualTitle += lessenedTitle.substring(
            i,
            min(i + widget.numberOfCharactersPerLine, lessenedTitle.length),
          ) +
          "\n";
    }

    final String coverUrl =
        'https://proxy.bertmpngn.workers.dev/covers/${widget.id}/${widget.coverfilename}';

    return InkWell(
      onTap: () {
        if (widget.types == 'Review') {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => PageReview(
                id: widget.id,
                title: widget.title,
                tags: widget.tags,
                description: widget.description,
                coverArt: coverUrl,
                userData: widget.userData,
              ),
            ),
          );
        } else {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => MangaSummary(
                id: widget.id,
                title: widget.title,
                tags: widget.tags,
                description: widget.description,
                coverArt: coverUrl,
                userData: widget.userData,
              ),
            ),
          );
        }
      },
      child: SizedBox(
        height: widget.boxHeight,
        width: widget.boxWidth,
        child: Column(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(16.0),
              child: Image.network(
                coverUrl,
                height: widget.coverHeight,
                width: widget.coverWidth,
                fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) {
                  return Container(
                    height: widget.coverHeight,
                    width: widget.coverWidth,
                    color: Colors.grey,
                    child: Icon(Icons.broken_image),
                  );
                },
              ),
            ),
            Flexible(
              child: Container(
                margin: const EdgeInsets.only(right: 5),
                height: 100,
                child: SingleChildScrollView(
                  child: Text(
                    actualTitle,
                    textAlign: TextAlign.justify,
                    style: const TextStyle(
                      color: Colors.black,
                      fontSize: 13,
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
